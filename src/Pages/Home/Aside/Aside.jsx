import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Context/DataProvider";
import bookmarkssvg from '../../../Images/bookmarks.svg';
import profile from '../../../Images/profile.svg';
import home from '../../../Images/home.svg';


const Aside = ({ setOpen }) => {
  const { user } = useContext(DataContext);
  const { profilePhoto } = user;
  function closeMenu(){
    setOpen(false)
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
        <Link className="list--link" to="/home/bookmarks" onClick={ closeMenu } >
          <img
            src={profile}
            alt="ProfilePicture"
            className="asideInfo__profilePicture"
            onClick={ closeMenu }
          />
          User
        </Link>
      </ol>
      <div>
        <p>LogOut</p>
      </div>
    </aside>
  );
};

export default Aside;