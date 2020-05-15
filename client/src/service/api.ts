export const URL = "http://localhost:3001";

export enum Endpoint {
  TEAMS = "teams",
}

export const request = async (endpoint: Endpoint, params?: any) => {
  const res = await fetch(`${URL}/${endpoint}`);
  const json = res.json();
  return json;
};
