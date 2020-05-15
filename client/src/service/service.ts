import { request, Endpoint } from "./api";

export const getTeamsRequest = async () => {
  return await request(Endpoint.TEAMS);
};
