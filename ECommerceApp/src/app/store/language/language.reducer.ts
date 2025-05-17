import { createReducer, on } from "@ngrx/store";
import { languageAction } from "./language.action";


const initialState = "en";

export const languageReducer = createReducer(
  initialState,
  on(languageAction, (state) => {
    return state === "en" ? "ar" : "en";
  })
)
