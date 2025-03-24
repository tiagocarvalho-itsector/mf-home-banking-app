import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import "../styles/personalData.css";

type PersonalDataProps = {
  username: string;
};

export const PersonalData: React.FC<PersonalDataProps> = ({ username }) => {
  const [showPersonalData, setShowPersonalData] = useState(false);
  const { findUser } = useUserStore();

  // const navigate = useNavigate();

  function toggleShowPersonalData() {
    // navigate("/profile");
    setShowPersonalData(!showPersonalData);
  }

  const user = findUser(username);

  return (
    <>
      {!showPersonalData ? (
        <button onClick={toggleShowPersonalData}>Show Personal Data</button>
      ) : (
        <div className={`offcanvas ${showPersonalData ? "open" : ""}`}>
          <div className="offcanvas-content">
            <h3 className="hello-message">
              Hello, {user.fullName.split(" ")[0]}!
            </h3>
            <button className="close-button" onClick={toggleShowPersonalData}>
              <b>X</b>
            </button>
            <div key={user.id}>
              <img
                src={user.image}
                alt="Invalid image"
                className="personal-image"
              />
              <p>
                <b>Name:</b> {user.fullName}
              </p>
              <p>
                <b>Email:</b> {user.email}
              </p>
            </div>
            <img
              src="https://i.ibb.co/rGVhGd1t/image-removebg-preview.png"
              alt="image-removebg-preview"
              className="logo"
            />
          </div>
        </div>
      )}
    </>
  );
};
