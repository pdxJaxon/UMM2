import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AppContainer, App } from "./App";
import { useStore } from "./store";
import { ActionType } from "./store/store";
import { act } from "react-dom/test-utils";

const seahawksEntry = {
  Abbreviation: "SEA",
  City: "Seattle",
  Nickname: "Seahawks",
};

const bearsEntry = {
  Abbreviation: "CHI",
  City: "Chicago",
  Nickname: "Bears",
};

const TestComponent = () => {
  const { state, dispatch } = useStore();
  return (
    <>
      {Object.entries(state.teams).map(([key, value]) => {
        return (
          <div id={key} key={key} data-testid={"team"}>
            <span>{value.Abbreviation}</span>
            <span>{value.City}</span>
            <span>{value.Nickname}</span>
          </div>
        );
      })}
      <button
        onClick={() => {
          dispatch({
            type: ActionType.SET_TEAMS,
            payload: {
              teams: [seahawksEntry],
            },
          });
        }}
      >
        Add Seahawks
      </button>

      <button
        onClick={() => {
          dispatch({
            type: ActionType.SET_TEAMS,
            payload: {
              teams: [bearsEntry],
            },
          });
        }}
      >
        Add Bears
      </button>
    </>
  );
};

describe("Wrapper Layer", () => {
  describe("Store Integration", () => {
    describe("inital state", () => {
      test("Context provides the expected inital state", () => {
        const { queryAllByTestId } = render(
          <AppContainer>
            <TestComponent />
          </AppContainer>
        );
        expect(queryAllByTestId("team").length).toBe(0);
      });
    });

    describe("Dispatch Actions", () => {
      test("Dispatching `SetTeams` adds payload to store", () => {
        const { getByText, getByTestId } = render(
          <AppContainer>
            <TestComponent />
          </AppContainer>
        );

        const addSeahawksBtn = getByText(/Add Seahawks/);

        fireEvent.click(addSeahawksBtn);

        expect(getByTestId("team")).toBeInTheDocument();
        expect(getByText(/Seattle/)).toBeInTheDocument();
      });

      test("Dispatching `SetTeams` overwrites payload in store", () => {
        const { getByText, queryByText } = render(
          <AppContainer>
            <TestComponent />
          </AppContainer>
        );

        const addSeahawksBtn = getByText(/Add Seahawks/);
        const addBearsBtn = getByText(/Add Bears/);

        fireEvent.click(addSeahawksBtn);

        expect(getByText(/Seattle/)).toBeInTheDocument();

        fireEvent.click(addBearsBtn);

        expect(queryByText(/Seattle/)).not.toBeInTheDocument();
        expect(getByText(/Chicago/)).toBeInTheDocument();
      });
    });
  });
});
