import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Определяем тип для пользователя
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// Создаем API-сервис
export const apiSlice = createApi({
  reducerPath: 'api', // Уникальный ключ для хранения данных в Redux Store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // Базовый URL
  endpoints: (builder) => ({
    // Эндпоинт для получения списка пользователей
    getUsers: builder.query<User[], void>({
      query: () => 'users', // Путь добавляется к baseUrl
    }),
  }),
});

// Экспортируем хук для запроса
export const { useGetUsersQuery } = apiSlice;