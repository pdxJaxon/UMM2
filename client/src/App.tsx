import React from "react";
import { StoreContextWrapper } from "./store/StoreContextWrapper";
import { TeamSelector } from "./components";
import { useStore } from "./store";
import { getTeamByAbbreviation } from "./store/selectors/getTeamByAbbreviation";

export const AppContainer: React.FC = ({ children }) => {
  return <StoreContextWrapper>{children}</StoreContextWrapper>;
};

export const App: React.FC = () => {
  const { state } = useStore();

  const {
    user: { favoriteTeam },
  } = state;

  return (
    <div className="App">
      <div>Hello uMockMe</div>
      {favoriteTeam && (
        <div>{getTeamByAbbreviation(state)(favoriteTeam).Nickname}</div>
      )}
      {!favoriteTeam && <TeamSelector />}
    </div>
  );
};

export default () => (
  <AppContainer>
    <App />
  </AppContainer>
);
