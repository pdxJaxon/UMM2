import React, { useContext } from "react";
import { StoreContext } from "./store";

export function useStore() {
  return useContext(StoreContext);
}
