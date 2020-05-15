import * as React from "react";
import { Select, Option } from "../../common";
import { useTeamSelector } from "./useTeamSelector";

export const TeamSelector: React.FC = () => {
  const props = useTeamSelector();
  return <TeamSelectorComponent {...props} />;
};

export type TeamSelectorComponentProps = {
  teamOptions: Option[];
  setFavoriteTeam: (id: string) => void;
};

export const TeamSelectorComponent: React.FC<TeamSelectorComponentProps> = React.memo(
  ({ setFavoriteTeam, teamOptions }) => {
    return <Select onChange={setFavoriteTeam} options={teamOptions} />;
  }
);
