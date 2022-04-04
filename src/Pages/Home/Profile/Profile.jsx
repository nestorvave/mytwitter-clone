import React from "react";
import { useContext } from "react";
import { DataContext } from "../../../Context/DataProvider";

const Profile = () => {
  const { user } = useContext(DataContext);
  const { email, profilePhoto } = user;

  return (
    <section className="personalInformation flex-center">
      <h2>Your Profile</h2>
      <img
        className="personalInformation__img"
        src={profilePhoto}
        alt="profileP"
      />
      <div className="containerInformation flex-center ">
        <p className="containerInformation__text">
          <b className="containerInformation__text--bold">Name:</b> {user.user}{" "}
        </p>
        <p className="containerInformation__text">
          <b className="containerInformation__text--bold">Email:</b> {email}{" "}
        </p>
      </div>
    </section>
  );
};

export default Profile;
