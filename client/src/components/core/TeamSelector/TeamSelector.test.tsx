import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { useTeamSelector } from "./useTeamSelector";

import { useService } from "../../../service";
import { StoreContext, ActionType } from "../../../store/store";

// Mock the module, without implementing a replacement, this gets hoisted above `mockFetchTeams` so we can't use that here
jest.mock("../../../service", () => ({
  useService: jest.fn(),
}));

let mockFetchTeams;

describe("TeamSelector", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(cleanup);

  describe("TeamSelector", () => {
    describe("hook", () => {
      beforeAll(() => {
        mockFetchTeams = jest.fn();
      });

      const fakeTeam = "THIS_IS_A_TEAM";

      const TestComponent: React.FC = () => {
        // Actually mock the return value while mockFetchTeams is in scope
        (useService as any).mockReturnValue({ fetchTeams: mockFetchTeams });
        const { setFavoriteTeam } = useTeamSelector();

        return (
          <div>
            <button onClick={() => setFavoriteTeam(fakeTeam)}>DISPATCH</button>
          </div>
        );
      };

      const fakeContext = {
        state: { teams: {} } as any,
        dispatch: jest.fn(),
      };

      const FakeContextWrapper: React.FC = ({ children }) => (
        <StoreContext.Provider value={fakeContext}>
          {children}
        </StoreContext.Provider>
      );

      it("calls fetchTeams on mount", () => {
        render(
          <FakeContextWrapper>
            <TestComponent />
          </FakeContextWrapper>
        );

        expect(mockFetchTeams).toBeCalledTimes(1);
      });

      it("returns setFavoriteTeam func with correct dispatch action", () => {
        const { getByText } = render(
          <FakeContextWrapper>
            <TestComponent />
          </FakeContextWrapper>
        );

        fireEvent.click(getByText(/DISPATCH/));

        expect(fakeContext.dispatch).toBeCalledWith({
          type: ActionType.SET_FAVORITE_TEAM_FOR_USER,
          payload: { team: fakeTeam },
        });
      });
    });
  });
});
