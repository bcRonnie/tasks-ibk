export interface AuthState {
    loggedIn: boolean;
    user: string;
}

export const initialState: AuthState = {
    loggedIn: false,
    user: '',
}