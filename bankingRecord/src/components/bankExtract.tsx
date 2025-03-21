import React, { useEffect, useState } from "react";
import { getBankExtract } from "../services/bankService";

type BankExtractProps = {
  username: string;
};

export const BankExtract: React.FC<BankExtractProps> = ({ username }) => {
  const [extract, setExtract] = useState<
    {
      id: string;
      date: string;
      description: string;
      payee: string;
      amount: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBankExtract(username);
      setExtract(data);
    };

    fetchData();
  }, [username]);

  return (
    <>
      <table>
        <thead>
          <th>Date</th>
          <th>Description</th>
          <th>Payee</th>
          <th>Amount</th>
        </thead>
        <tbody>
          <tbody>
            {extract.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.payee}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </tbody>
      </table>
    </>
  );
};
