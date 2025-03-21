import axios from "axios";

const api = axios.create({
  baseURL: "https://67dd85f5e00db03c406bfabc.mockapi.io/api/",
});

export async function getCurrentBalance(username: string): Promise<number> {
  const response = (
    await api.get<
      {
        username: string;
        balance: string;
        id: string;
      }[]
    >(`balance`, {
      params: { username: username },
    })
  ).data;

  return Number.parseFloat(response[0].balance);
}

export async function getBankExtract(username: string): Promise<
  {
    id: string;
    date: string;
    description: string;
    payee: string;
    amount: string;
  }[]
> {
  const extract = (
    await api.get<
      {
        id: string;
        date: string;
        description: string;
        payee: string;
        amount: string;
      }[]
    >(`extract`, {
      params: { username: username },
    })
  ).data;

  return extract;
}
