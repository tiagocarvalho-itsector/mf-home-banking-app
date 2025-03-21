import React, { useState, useEffect } from "react";
import { getCurrentBalance } from "../services/bankBalanceService";

type BankBalanceProps = {
  username: string;
};

export const BankBalance: React.FC<BankBalanceProps> = ({ username }) => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    getCurrentBalance(username).then(setBalance);
  }, [username]);

  return (
    <>
      <h3 style={{ fontWeight: "normal" }}>
        <b>Current Balance:</b>{" "}
        {balance !== null ? balance + "€" : "Loading..."}
      </h3>
    </>
  );
};
