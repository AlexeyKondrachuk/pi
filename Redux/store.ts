import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { apiSlice } from './ApiSlice'; // RTK Query API Slice
import { authApi } from './services/authApi';

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
    .concat(authApi.middleware) // Добавляем middleware для authApi
    .concat(apiSlice.middleware),  // Подключаем middleware RTK Query
  });

// Типизация Store
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];



