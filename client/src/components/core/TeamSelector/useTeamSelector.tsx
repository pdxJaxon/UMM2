import * as React from "react";
import { useService } from "../../../service";
import { useStore } from "../../../store";
import { ActionType } from "../../../store/store";

export function useTeamSelector() {
  const { fetchTeams } = useService();

  const {
    dispatch,
    state: { teams },
  } = useStore();

  const requestInitialData = async () => {
    // This updates the store
    await fetchTeams();
  };

  React.useEffect(() => {
    requestInitialData();
  }, []);

  const teamOptions = Object.values(teams).map(
    ({ Abbreviation, Nickname }) => ({
      label: Nickname,
      value: Abbreviation,
    })
  );

  const setFavoriteTeam = (team) =>
    dispatch({
      type: ActionType.SET_FAVORITE_TEAM_FOR_USER,
      payload: { team },
    });

  return { setFavoriteTeam, teamOptions };
}
