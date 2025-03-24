import React, { useEffect, useState } from "react";
import { getBankExtract } from "../services/bankService";

type BankExtractProps = {
  username: string;
};

export const BankExtract: React.FC<BankExtractProps> = ({ username }) => {
  const [extract, setExtract] = useState<
    {
      id: string;
      username: string;
      date: string;
      description: string;
      payee: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBankExtract(username);
      setExtract(data);
    };

    fetchData();
  }, [username]);

  function getDate(dateStr: string) {
    const dateStrAsDate = new Date(dateStr);
    return dateStrAsDate.toDateString();
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Payee</th>
        </tr>
      </thead>
      <tbody>
        {extract.map((transaction) => (
          <tr key={transaction.id}>
            <td data-label="Date">{getDate(transaction.date)}</td>
            <td data-label="Description">{transaction.description}</td>
            <td data-label="Payee">{transaction.payee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
