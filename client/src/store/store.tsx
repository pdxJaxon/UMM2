import React, { Dispatch } from "react";
import { produce } from "immer";

export type Team = {
  Abbreviation: string;
  City: string;
  Nickname: string;
};

type AbbreviationMappedTeams = { [key: string]: Team };

export type Store = {
  error: string | null;
  teams: AbbreviationMappedTeams;
  user: {
    favoriteTeam: string | null;
  };
};

export enum ActionType {
  SET_ERROR = "setError",
  SET_TEAMS = "setTeams",
  SET_FAVORITE_TEAM_FOR_USER = "setFavTeamForUser",
}

export type Action =
  | {
      type: ActionType.SET_ERROR;
      payload: { message: string };
    }
  | {
      type: ActionType.SET_TEAMS;
      payload: { teams: Team[] };
    }
  | {
      type: ActionType.SET_FAVORITE_TEAM_FOR_USER;
      payload: { team: string };
    };

export function reducer(state: Store, action: Action) {
  if (process.env.NODE_ENV === "development") {
    /** Log the actions that are called in development only -
     * eventually we could conditionallly exclude this from the build altogether,
     * or use a more robust logging system that handles that for us
     */
    console.log({ action });
  }

  return produce(state, (draft) => {
    switch (action.type) {
      case ActionType.SET_ERROR: {
        draft.error = action.payload.message;
        return;
      }
      case ActionType.SET_TEAMS:
        const teams = action.payload.teams.reduce((acc, team) => {
          acc[team.Abbreviation] = team;
          return acc;
        }, {} as AbbreviationMappedTeams);

        draft.teams = teams;
        return;
      case ActionType.SET_FAVORITE_TEAM_FOR_USER:
        const teamId = action.payload.team;
        draft.user.favoriteTeam = teamId;
        return;
      default:
        throw new Error("Invalid Action Type Encountered in App Reducer");
    }
  });
}

export const initialState: Store = {
  error: null,
  teams: {},
  user: { favoriteTeam: null },
};

export type StoreContextType = {
  state: Store;
  dispatch: Dispatch<Action>;
};

export const StoreContext = React.createContext({} as StoreContextType);
