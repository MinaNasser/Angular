
import { createReducer, on } from "@ngrx/store";
import { decreaseCounter, increaseCounter } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
    on(increaseCounter, (state) => state + 1),
    on(decreaseCounter, (state) => state - 1)

);
// decreaseCounter

