/**
 * Dependencies
 */
import React, { useContext, useEffect } from "react";
/**
 * Components
 */
import Tweet from "../Tweet/Tweet";

/**
 * Helpers
 */
import { getStorageValue } from "../Feed/Feed";
import { DataContext } from "../../../Context/DataProvider";

const Bookmarks = () => {
  const { bookmarks, setBookmarks } = useContext(DataContext);

  useEffect(() => {
    setBookmarks(getStorageValue);
  }, [setBookmarks]);

  return (
    <div className="tweetsFeed flex-center">
      <h2>{bookmarks.length === 0 ? "Any Bookmarks" : "Bookmarks"}</h2>
      {
        bookmarks.map( item => (
          <Tweet
            key={item.id}
            id={item.id}
            tweet={item.tweet}
            userTwitter={item.user}
            email={item.email}
            likes={item.likes}
            profilePhoto={item.profilePhoto}
          />
        ))
      }
    </div>
  );
};

export default Bookmarks;
