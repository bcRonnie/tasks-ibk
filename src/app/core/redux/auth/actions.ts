import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[auth] LOGIN',
    props< { user: string } >()
);
export const logout = createAction('[auth] LOGOUT');