import { reducer, Team, Store, ActionType } from "./store";

describe("reducer", () => {
  let mockStore: Store;
  beforeEach(() => {
    mockStore = { teams: {}, user: { favoriteTeam: null } };
  });

  test("Bad Action", () => {
    // Because this throws an error, Jest requires we wrap this in a function
    expect(() => {
      reducer(mockStore, {
        type: "NOT VALID" as ActionType,
        payload: {} as any,
      });
    }).toThrow();
  });

  test("SET_TEAMS", () => {
    const mockTeam: Team = {
      Abbreviation: "TEN",
      City: "Nashville",
      Nickname: "Titans",
    };

    const expected = { ...mockStore, teams: { TEN: mockTeam } };

    const actual = reducer(mockStore, {
      type: ActionType.SET_TEAMS,
      payload: { teams: [mockTeam] },
    });

    expect(actual).toEqual(expected);
  });

  test("SET_FAVORITE_TEAM_FOR_USER", () => {
    const expected = {
      ...mockStore,
      user: { ...mockStore.user, favoriteTeam: "TEN" },
    };

    const actual = reducer(mockStore, {
      type: ActionType.SET_FAVORITE_TEAM_FOR_USER,
      payload: { team: "TEN" },
    });

    expect(actual).toEqual(expected);
  });
});
