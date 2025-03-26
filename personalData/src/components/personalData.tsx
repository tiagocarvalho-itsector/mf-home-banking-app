import React, { useEffect } from "react";
import { useUserStore } from "../stores/useUserStore";
import "../styles/personalData.css";
import { User } from "../stores/types";
import { useNavigate } from "react-router-dom";

type PersonalDataProps = {
  username: string;
  closePersonalData: () => void;
};

export const PersonalData: React.FC<PersonalDataProps> = ({
  username,
  closePersonalData,
}) => {
  const { findUser } = useUserStore();
  const navigate = useNavigate();

  const user = findUser(username) as User;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    user && (
      <div className="offcanvas open">
        <div className="offcanvas-content">
          <h3 className="hello-message">
            Hello, {user?.fullName.split(" ")[0]}!
          </h3>
          <button className="close-button" onClick={closePersonalData}>
            <b>X</b>
          </button>
          <div key={user?.id}>
            <img
              src={user?.image}
              alt="User profile"
              className="personal-image"
            />
            <p>
              <b>Name:</b> {user?.fullName}
            </p>
            <p>
              <b>Email:</b> {user?.email}
            </p>
          </div>
        </div>
      </div>
    )
  );
};
