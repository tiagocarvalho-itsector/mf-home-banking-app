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
