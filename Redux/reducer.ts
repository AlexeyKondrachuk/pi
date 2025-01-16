import { combineReducers } from '@reduxjs/toolkit';
import userAuthReducer from './userAuthSlice';
import mainLoginReducer from './MainLoginSlice'

import { apiSlice } from './ApiSlice'; // Ваш RTK Query API Slice
import { authApi } from './services/authApi';

export const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  mainLogin: mainLoginReducer,
   
  [apiSlice.reducerPath]: apiSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  // Добавьте редьюсер RTK Query
});