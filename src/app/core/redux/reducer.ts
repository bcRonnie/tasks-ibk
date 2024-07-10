import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./state";
import { authReducer } from "./auth/reducer";

export const reducer: ActionReducerMap<AppState> = {
    auth: authReducer
}