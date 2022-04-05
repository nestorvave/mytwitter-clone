/**
 * Dependencies
 */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Components
 */
import NewTweet from "../NewTweet/NewTweet";
import Tweet from "../Tweet/Tweet";

/**
 * Helpers
 */
import useGetTweets from "../../../Helpers/useGetTweets";
import { DataContext } from "../../../Context/DataProvider";

/**
 * Libraries
 */
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

//Handle LocalStorage
export function getStorageValue(defaultValue = []) {
  const saved = localStorage.getItem("bookmarks");
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}
//styles of Spinner
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 35vh;
`;

const Feed = () => {
  const { uiTweets, setUiTweets, setBookmarks, loading, setLoading } =
    useContext(DataContext);
  const getTweets = useGetTweets(setLoading);

  //get tweets to Display on UI
  useEffect(() => {
    setUiTweets(getTweets);
  }, [getTweets, setUiTweets]);

  //Get Localstorage after first render
  useEffect(() => {
    setBookmarks(getStorageValue);
  }, [setBookmarks]);

  return (
    <>
      <div className="desktop--newtweet">
        <NewTweet />
      </div>
      <div className="tweetsFeed flex-center">
        {
          loading ? (
            <RingLoader color="#82C35F" size={150} css={override} />
          ) : (
            uiTweets.map( item => (
              <Tweet
                key={item.id}
                id={item.id}
                tweet={item.tweet}
                userTwitter={item.user}
                email={item.email}
                likes={item.likes}
                profilePhoto={item.profilePhoto}
                uid={item.uid}
                date={item.date}
              />
            ))
          )
        }
        <Link to="/create" className="btn-tweet">
          +
        </Link>
      </div>
    </>
  );
};

export default Feed;
