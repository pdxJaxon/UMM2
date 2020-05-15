import * as React from "react";
import { StoreContext, initialState, reducer } from "./store";

export type StoreContextWrapperProps = {};

export const StoreContextWrapper: React.FC<StoreContextWrapperProps> = React.memo(
  ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
      <StoreContext.Provider value={{ state, dispatch }}>
        {children}
      </StoreContext.Provider>
    );
  }
);
