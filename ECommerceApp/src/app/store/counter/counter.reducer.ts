
import { createReducer, on } from "@ngrx/store";
import { increaseCounter } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
    on(increaseCounter, (state) => state + 1)
);
