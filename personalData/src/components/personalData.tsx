import React from "react";

type PersonalDataProps = {
  username: string;
};

export const PersonalData: React.FC<PersonalDataProps> = ({ username }) => {
  return (
    <>
      <p>{username}</p>
    </>
  );
};
