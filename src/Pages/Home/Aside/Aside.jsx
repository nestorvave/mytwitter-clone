import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Context/DataProvider";
import bookmarkssvg from '../../../Images/bookmarks.svg';
import profile from '../../../Images/profile.svg';
import home from '../../../Images/home.svg';
import exit from '../../../Images/exit.svg';

import  firebase from '../../../Firebase/firebase'


const Aside = ({ setOpen }) => {
  const { user, setStatus } = useContext(DataContext);
  const { profilePhoto } = user;

  function closeMenu(){
    setOpen(false)
  }
  
  
  function handleLogOut() {
      firebase.auth().signOut()
      setStatus(null)
  }
  

  return (
    <aside className="aside ">
      <section className="asideInfo">
        <img
          src={profilePhoto}
          alt="ProfilePicture"
          className="asideInfo__profilePicture"
          onClick={ closeMenu }
        />
        <p className="asideInfo__name">@{user.user}</p>
      </section>
      <ol className="list flex-center">
        <Link className="list--link" to="/home/feed" onClick={ closeMenu } >
          <img
            src={home}
            alt="ProfilePicture"
            className="asideInfo__profilePicture"
            onClick={ closeMenu }
          />
          Feed
        </Link>
        <Link className="list--link" to="/home/bookmarks" onClick={ closeMenu } >
          <img
            src={bookmarkssvg}
            alt="ProfilePicture"
            className="asideInfo__profilePicture"
            onClick={ closeMenu }
          />
          BookMarks
        </Link>
        <Link className="list--link" to="/home/profile" onClick={ closeMenu } >
          <img
            src={profile}
            alt="ProfilePicture"
            className="asideInfo__profilePicture"
            onClick={ closeMenu }
          />
          Profile
        </Link>
      </ol>
      <div  className="asideLogout" onClick={ handleLogOut } >
        <img
          src={exit}
          alt="ProfilePicture"
          className="asideLogout__img"
          
        />
        <p>LogOut</p>
      </div>
    </aside>
  );
};

export default Aside;
