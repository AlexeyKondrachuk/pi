
'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookie from 'js-cookie';

interface SignInResponse {
  token: string;
}

interface SignInRequest {
  email: string;
  password: string;
  role: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    // Эндпоинт для входа
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: ({ email, password, role }) => ({
        url: 'email/signin',
        method: 'POST',
        body: { email, password, role },
      }),
   
      transformResponse: (response: SignInResponse) => {
        const token = response.token;
        if (token) {
          // Сохранение токена в cookies
          Cookie.set('auth_token', token, { expires: 1 });
        }
        return response;
      },
    }),

    // Эндпоинт для выхода
    signOut: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: 'email/signout', // Путь для выхода (предположительно)
        method: 'POST', // HTTP метод для выхода
        body: {}, // Тело запроса для выхода (если необходимо, но часто для выхода тело не требуется)
      }),
      transformResponse: () => {
        // Удаляем токен из cookies при выходе
        Cookie.remove('auth_token');
        return { success: true };
      },
    }),
  }),
});

export const { useSignInMutation, useSignOutMutation } = authApi;