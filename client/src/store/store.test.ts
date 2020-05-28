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
    const titans: Team = {
      abbreviation: "TEN",
      city: "Nashville",
      nickname: "Titans",
    };

    const storeWithOnlyTitans = { ...mockStore, teams: { TEN: titans } };

    const actual = reducer(mockStore, {
      type: ActionType.SET_TEAMS,
      payload: { teams: [titans] },
    });

    expect(actual).toEqual(storeWithOnlyTitans);
  });

  test("SET_FAVORITE_TEAM_FOR_USER", () => {
    const storeWithFavoriteTeam = {
      ...mockStore,
      user: { ...mockStore.user, favoriteTeam: "TEN" },
    };

    const actual = reducer(mockStore, {
      type: ActionType.SET_FAVORITE_TEAM_FOR_USER,
      payload: { team: "TEN" },
    });

    expect(actual).toEqual(storeWithFavoriteTeam);
  });

  test("SET_ERROR", () => {
    const error = "THIS IS AN ERROR";
    const storeWithError = {
      ...mockStore,
      error,
    };

    const actual = reducer(mockStore, {
      type: ActionType.SET_ERROR,
      payload: { message: error },
    });

    expect(actual).toEqual(storeWithError);
  });
});
