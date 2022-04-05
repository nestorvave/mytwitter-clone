/**
 * Dependencies
 */
import React, { useEffect, useContext  } from "react";

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
import Like from "../../../Images/like.svg";
import Trash from "../../../Images/trash.svg";

/**
 * Libraries
 */
import moment from "moment";

const Tweet = ({ tweet, userTwitter, likes, profilePhoto, id, uid, date }) => {

  const { uiTweets, bookmarks, setBookmarks, isDeleting, setIsDeleting } =
    useContext(DataContext);

  const dateTweet = moment(date);

  //Setting in the localStorage bookmarks state
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);
  
  let arrayFiltered = [];
  /**
   *
   * @description fn to add and remove likes and save in state to display bookmarks tweets
   * @param {*which is received by map fn of each item} likes
   * @param {*which is received by map fn of each item, id of each tweet} docId
   */
  function handleLike(like, docId) {
    if (bookmarks.length === 0) {
      db.doc(`tweets/${docId}`).update({ likes: like + 1 });
      arrayFiltered = uiTweets.filter((item) => item.id === docId);
      arrayFiltered[0] = { ...arrayFiltered[0], likes: like + 1 };
      setBookmarks([...bookmarks, arrayFiltered[0]]);

    } else if (bookmarks.length > 0) {
      let flag = bookmarks.some((book) => docId === book.id);

      if (flag === false) {
        db.doc(`tweets/${docId}`).update({ likes: like + 1 });
        arrayFiltered = uiTweets.filter((item) => item.id === docId);
        arrayFiltered[0] = { ...arrayFiltered[0], likes: like + 1 };
        setBookmarks([...bookmarks, arrayFiltered[0]]);

      } else {
        db.doc(`tweets/${docId}`).update({ likes: like - 1 });
        setBookmarks(bookmarks.filter((item) => item.id !== docId));
      }
    }
  }

  function handleDeleteTweet(idTweet, idUser) {
    setIsDeleting({
      ...isDeleting,
      status: true,
      idTweet,
      idUser,
    });
  }

  return (
    <main className="tweet">
      <aside className="tweet__image">
        <img
          className="tweet__image--userPP"
          src={profilePhoto}
          alt="profile"
        />
      </aside>
      <section className="about">
        <p className="about__profile">
          @{userTwitter} <span>{dateTweet.format("L")}</span>
        </p>
        <p className="about__story">{tweet}</p>
      </section>
      <section className="action">
        <div className="action__svg" onClick={() => handleDeleteTweet(id, uid)}>
          <img src={Trash} alt="unlike" />
        </div>
        <div className="action__svg" onClick={() => handleLike(likes, id)}>
          <img src={Like} alt="likes" />
          <p>{likes}</p>
        </div>
      </section>
    </main>
  );
};

export default Tweet;
