import { Store } from "../store";

export const getTeamByAbbreviation = (store: Store) => (id: string) => {
  return store.teams[id];
};
