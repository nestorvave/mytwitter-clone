/**
 * Dependencies
 */
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

/**
 * Firebase
 */

/**
 * Helpers
 */
import useUpdateDb from "../../../Helpers/useUpdateDb";
import { DataContext } from "../../../Context/DataProvider";
import useForm from "../../../Hooks/useForm";
/**
 * libraries
 */
 import 'animate.css';


const NewTweet = () => {
  const { user, setLoading } = useContext(DataContext);
  const [values, handleForm, setValues] = useForm({ newTweet: "" });
  const { newTweet } = values;
  const history = useHistory();

  function AddingTweet(e) {
    e.preventDefault();
    const newTweetByUser = {
      ...user,
      tweet: newTweet,
      likes: 0,
      date: new Date().getTime(),
    };
    useUpdateDb(newTweetByUser);
    history.push("home/feed");
    setValues({ newTweet: "" });
    setLoading(true);
  }

  function cancelTweet() {
    history.push("home/feed");
  }

  return (
    <main className="tweet-section flex-center animate__animated animate__fadeIn">
      <nav className="tweet-nav">
        <button
          className="tweet-nav__button tweet-nav__button--cancel"
          onClick={cancelTweet}
        >
          Cancel
        </button>
        <button
          className="tweet-nav__button button--primary"
          onClick={AddingTweet}
        >
          Tweet
        </button>
      </nav>
      <section className="text-area-section ">
        <div className="profile">
          <img src={user.profilePhoto} alt="" />
        </div>
        <textarea
          name="newTweet"
          value={newTweet}
          onChange={handleForm}
          className="text-area-section__info"
          autoFocus
          placeholder="What´s happening?"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </section>
    </main>
  );
};

export default NewTweet;
