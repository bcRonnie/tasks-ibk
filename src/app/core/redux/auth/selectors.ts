import { createSelector } from "@ngrx/store";
import { AppState } from "../state";
import { AuthState } from "./state";

export const selectAuth = (state: AppState) => state.auth;

export const selectLoggedIn = createSelector(
    selectAuth,
    (state: AuthState) => state.loggedIn
);

export const selectUser = createSelector(
    selectAuth,
    (state: AuthState) => state.user
);