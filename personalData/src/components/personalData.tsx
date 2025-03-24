import React, { useState } from "react";

type PersonalDataProps = {
  username: string;
};

export const PersonalData: React.FC<PersonalDataProps> = ({ username }) => {
  const [showPersonalData, setShowPersonalData] = useState(false);

  function toggleShowPersonalData() {
    setShowPersonalData(!showPersonalData);
  }

  return (
    <>
      {!showPersonalData ? (
        <button onClick={toggleShowPersonalData}>Show Personal Data</button>
      ) : (
        <div className={`offcanvas ${showPersonalData ? "open" : ""} `}>
          <div className="offcanvas-content">
            <button className="close-button" onClick={toggleShowPersonalData}>
              <b>X</b>
            </button>
            <p>{username}</p>
          </div>
        </div>
      )}
    </>
  );
};
