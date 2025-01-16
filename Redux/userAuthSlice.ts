import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  username: string;
  password: string;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  username: '',
  password: '',
  isAuthenticated: false,
  error: null,
};
const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetAuth: (state) => {
      state.username = '';
      state.password = '';
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { setCredentials, setAuthenticated, setError, resetAuth } = userAuthSlice.actions;

export default userAuthSlice.reducer;