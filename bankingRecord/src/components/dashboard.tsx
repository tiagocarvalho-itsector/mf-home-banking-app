import React from "react";
import { BankBalance } from "./bankBalance";
import { BankExtract } from "./bankExtract";

type DashboardProps = {
  username: string;
};

export const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  return (
    <>
      <h1>Banking Record</h1>
      <h3 style={{ fontWeight: "normal" }}>Welcome, {username}!</h3>
      <hr className="separator" />
      <BankBalance username={username} />
      <BankExtract username={username} />
    </>
  );
};
