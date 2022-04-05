/**
 * Dependencies
 */
import React, { useContext, useState } from "react";

/**
 * Components
 */
import FeedRouter from "../../../Routers/FeedRouter";
import Aside from "../Aside/Aside";
import Message from "../../../Components/Message/Message";

/**
 * Firebase
 */
import { db } from "../../../Firebase/firebase";

/**
 * Helpers
 */
import { DataContext } from "../../../Context/DataProvider";

/**
 * SVG
 */
import Logo from "../../../Images/logo.svg";
import sadFace from "../../../Images/sadFace.svg";

const HomeScreen = () => {
  const { user, isDeleting, setIsDeleting } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  
  const { profilePhoto } = user;
  const { idTweet, idUser } = isDeleting;

  function handleDeleteOfDb(idTweet, idUser) {
    if (user.uid === idUser) {
      db.doc(`tweets/${idTweet}`).delete();
      setIsDeleting({
        status: false,
        idTweet: "",
        idUser: "",
      });
    }
  }

  return (
    <main className="mainHomeScreen ">
      {
        open && <Aside setOpen={setOpen} />
      }
      {
        isDeleting.status && (
          <Message
            image={sadFace}
            header="Are you sure?"
            p={"Do you want to delete this tweet?"}
            cancel={() => setIsDeleting(false)}
            confirm={() => handleDeleteOfDb(idTweet, idUser)}
          />
        )
      }
      <nav className="navHomeScreen ">
        <img
          className="navHomeScreen__profilePicture"
          src={profilePhoto}
          alt="profilePhoto"
          onClick={() => setOpen(!open)}
        />
        <img className="navHomeScreen__logo" src={Logo} alt="logo" />
        <span className="navHomeScreen__logo"></span>
      </nav>
      <div className="desktop--aside">
        <Aside setOpen={setOpen} />
      </div>
      <section className="main-content">
        <FeedRouter />
      </section>
    </main>
  );
};

export default HomeScreen;
