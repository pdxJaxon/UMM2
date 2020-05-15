import React from "react";
import { useStore } from "../store/useStore";
import { getTeamsRequest } from "./service";
import { ActionType } from "../store/store";

export function useService() {
  const { dispatch } = useStore();

  const fetchTeams = async () => {
    const teams = await getTeamsRequest();
    dispatch({ type: ActionType.SET_TEAMS, payload: { teams } });
  };

  return {
    fetchTeams,
  };
}
