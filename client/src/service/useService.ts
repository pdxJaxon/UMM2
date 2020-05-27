import React from "react";
import { useStore } from "../store/useStore";
import { getTeamsRequest } from "./service";
import { ActionType } from "../store/store";

export function useService() {
  const { dispatch } = useStore();

  const fetchTeams = async () => {
    const { data, status, error } = await getTeamsRequest();
    if (error) {
      console.warn(error);
      dispatch({
        type: ActionType.SET_ERROR,
        payload: { message: error.message },
      });

      return;
    }

    dispatch({ type: ActionType.SET_TEAMS, payload: { teams: data } });
  };

  return {
    fetchTeams,
  };
}
