"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { setCredentials, setAuthenticated, setError } from '../../Redux/userAuthSlice';
import { useAppDispatch, useAppSelector } from '@/hook/redux';

import '../../styles/admin/login.scss'


const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {error } = useAppSelector((state) => state.userAuth)

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!inputUsername) {
        dispatch(setError('Введите логин'));
        return;
      }
   
  
    // Проверка логина и пароля
    if (inputUsername === 'admin' && inputPassword === '12345') {
      // Сохранение данных в store
      dispatch(setCredentials({ username: inputUsername, password: inputPassword }));
      dispatch(setAuthenticated(true));
  
      // Перенаправление на защищённую страницу
      router.push('/admin');
    } else {
      dispatch(setError('Неверный логин или пароль'));
    }
  };


  useEffect(() => {
    if (!inputUsername || !inputPassword) {
        dispatch(setError(null));
        return;
      }
  }, [inputUsername, inputPassword, dispatch])

  return (
    <div className='login-container'>
      <h2>Панель Администратора</h2>
      <form onSubmit={handleLogin}
      className='form_login_page'
      >
        <div>
        
          <input 
            className='input_admin_panel'
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            required
            placeholder='Логин'
          />
        </div>
        <div>
      
          <input
            className='input_admin_panel'
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            required
            placeholder='Пароль'
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button 
        className='btn_login'
        type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;