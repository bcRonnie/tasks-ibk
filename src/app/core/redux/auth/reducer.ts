import { Action, createReducer, on } from "@ngrx/store";
import { AuthState, initialState } from "./state";
import { login, logout } from "./actions";

export const authReducer = createReducer(
    initialState,
    on(login, (state, {user}) => ({
        ...state,
        loggedIn: true,
        user: user
    })),
    on(logout, (state) => ({
        ...state,
        loggedIn: false,
        user: ''
    }))
);

export function reducer(
    state: AuthState | undefined,
    action: Action
){
    return authReducer(state, action);
}