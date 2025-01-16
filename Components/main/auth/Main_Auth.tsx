'use client'

import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hook/redux'
import { setIsLogin, setIsLoginShow } from '@/Redux/MainLoginSlice'

import '../../../styles/main/main_login.scss'

import { useSignInMutation } from '@/Redux/services/authApi'


interface Errors {
  email: boolean | null;
  password: boolean | null;
  confirmPassword: boolean | null;
}

interface ErrorsMessage {
  emailError: string | null;
  passwordError: string | null;  
  confirmPasswordError?: string | null;
}

interface ITouched {
  email: boolean
  password: boolean,
  confirmPassword: boolean,
}



export const Main_Auth = () => {

      const dispatch = useAppDispatch()
      const [email, setEmail] = useState<string>('');
      const [password, setPassword] = useState<string>('');
      const [role] = useState('buyer');
     
      const [signIn] = useSignInMutation()

      // const [formData, setFormData] = useState({
      //   email: '',
      //   password: '',
      //   confirmPassword: '',
      // });
   
      const {isLogin} = useAppSelector((state) => state.mainLogin)
      const [confirmPassword, setConfirmPassword] = useState<string>(""); // Для повторного ввода пароля
      const [errorMessage, setErrorMessage] = useState<ErrorsMessage>({
        emailError: null,
        passwordError: null,
       
      })  

      const [errors, setErrors] = useState<Errors>({
        email: null,
        password: null,
        confirmPassword: null,
      });

      const [touched, setTouched] = useState<ITouched>({
        email: false,
        password: false,
        confirmPassword: false,
      });

    
    
      const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      // Валидация пароля
      const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[a-zA-Z]).{6,}$/; // Минимум 6 символов, хотя бы одна английская буква
        return passwordRegex.test(password);
      };

      useEffect(() => {
        const newErrors: Errors = { ...errors };
        const newErrorMessages: ErrorsMessage = { ...errorMessage };
    
        // Валидация email
        if (email === '') {
          newErrors.email = null;
          newErrorMessages.emailError = null;
        } else if (!validateEmail(email)) {
          newErrors.email = true;
          newErrorMessages.emailError = 'Указанный e-mail некорректен';
        } else {
          newErrors.email = false;
          newErrorMessages.emailError = null;
        }
    
        // Валидация password
        if (password === '') {
          newErrors.password = null;
          newErrorMessages.passwordError = null;
        } else if (!validatePassword(password)) {
          newErrors.password = true;
          newErrorMessages.passwordError =
            'Пароль должен содержать минимум 6 символов и хотя бы одну английскую букву';
        } else {
          newErrors.password = false;
          newErrorMessages.passwordError = null;
        }
    
        // Валидация confirmPassword (только если регистрация)
        if (!isLogin) {
          if (confirmPassword === '') {
            newErrors.confirmPassword = null;
            newErrorMessages.confirmPasswordError = null;
          } else if (confirmPassword !== password) {
            newErrors.confirmPassword = true;
            newErrorMessages.confirmPasswordError = 'Пароли не совпадают';
          } else {
            newErrors.confirmPassword = false;
            newErrorMessages.confirmPasswordError = null;
          }
        }
    
        setErrors(newErrors);
        setErrorMessage(newErrorMessages);
      }, [email, password, confirmPassword, isLogin]);

      

     
    
      

const handleBlur = (field: 'email' | 'password' | 'confirmPassword') => {
      setTouched((prevTouched) => ({
        ...prevTouched,
        [field]: true,
      }));
    };
  
    const handleChange = (field: 'email' | 'password' | 'confirmPassword', value: string) => {
      if (touched[field]) {
        setTouched((prevTouched) => ({
          ...prevTouched,
          [field]: false, // сбрасываем флаг "touched", если пользователь продолжает вводить данные
        }));
      }
  
      if (field === 'email') setEmail(value);
      if (field === 'password') setPassword(value);
      if (field === 'confirmPassword') setConfirmPassword(value);
    };



const handlerClose = () => {
  dispatch(setIsLoginShow(false))
}

const handlerSwitch = (): void => {
  dispatch(setIsLogin(!isLogin));
  setErrors({
    email: null,
    password: null,
    confirmPassword: null,
  });
  setEmail("");
  setPassword("");
  setConfirmPassword("");
}

const handlerResetError = () => {
  setErrorMessage({
    emailError: null,
    passwordError: null,
    confirmPasswordError: null,  
  });
}


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await signIn({ email, password, role }).unwrap(); // Выполняем запрос
    console.log(email, password, role)
    dispatch(setIsLoginShow(false));
  } catch (err) {
    console.error('Ошибка при входе:', err);
  }
};

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + 'email/signin';
console.log('API URL:', apiUrl);






  return (
    <div className='main_login_form-wrapper'>

      <form action="" className='main_login_form' onSubmit={handleSubmit} method="POST">
        <h2 className='title-form'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
      <button onClick={handlerClose} className='main_login_form-close'>
       X
      </button>
      <div >
           
            <input
              className='input_main_login'
              placeholder='Почта'
              type="text"
              style={{
                borderRight:
                  errors.email === null
                    ? "3px solid #ccc"
                    : errors.email
                    ? "3px solid red"
                    : "9px solid #88dc88",
              }}
              value={email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              required
            />
          </div>
          <div >
        
            <input
              className='input_main_login'
              placeholder='Пароль'
              style={{
                borderRight:
                  errors.password === null
                    ? "3px solid #ccc"
                    : errors.password
                    ? "3px solid red"
                    : "9px solid #88dc88",
              }}
              type="password"
              value={password}
              onChange={(e) => handleChange('password', e.target.value)}
              onBlur={() => handleBlur('password')}
              required
            />
          </div>
         {!isLogin && <div className={`fade-in`}>
        
        <input
          className='input_main_login'
          placeholder='Повторите пароль'
          style={{
            borderRight:
              errors.confirmPassword === null
                ? "3px solid #ccc"
                : errors.confirmPassword
                ? "3px solid red"
                : "9px solid #88dc88",
          }}
          type="password"
          value={confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)} 
          onBlur={() => handleBlur('confirmPassword')}
          required
        />
      </div> }
      {(
  ((touched.email && errorMessage.emailError) || (touched.password && errorMessage.passwordError) 
  || (touched.confirmPassword && errorMessage.confirmPasswordError)) &&
  <div className="main_form_notifications"  >
       <button onClick={handlerResetError} className='main_login_form-close'>
       X
      </button>
  <svg  fill="#fff" focusable="false"
   width="32px" height="32px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
      </path></svg>
 

    {touched.email && errorMessage.emailError && (
    
          
     <p > {errorMessage.emailError}</p>
      
      
    )}
    {touched.password && errorMessage.passwordError && !errorMessage.emailError && (
        
       <p >{errorMessage.passwordError}</p>
        
    )}
    {!isLogin && touched.confirmPassword && errorMessage.confirmPasswordError && !errorMessage.emailError && !errorMessage.passwordError && (
          
          <p>{errorMessage.confirmPasswordError}</p>
          
    )}

    
  </div>
)}

          <button type="submit" className='btn_main_form_login'
        disabled={
          !!(errorMessage.emailError && touched.email && email === '') ||
          !!(errorMessage.passwordError && touched.password) ||
          !!(!isLogin && errorMessage.confirmPasswordError && touched.confirmPassword)
        }
          
          >{isLogin ? 'Войти' : 'Создать акаунт'}</button>
           <div className='auth_provaiders-container'>
            <h2 className='auth_provaiders-title'>Войти с помощью</h2>
            <div className='provaider_btn-wrapper'>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
<g fill="none" fill-rule="nonzero" stroke="#339af0" strokeWidth="5.33333" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" font-family="none" font-weight="none" font-size="none" 
><path d="M3.50152,252.49848v-248.99696h248.99696v248.99696z" id="shape"></path></g><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M24,4c-11.04569,0 -20,8.95431 -20,20c0,11.04569 8.95431,20 20,20c11.04569,0 20,-8.95431 20,-20c0,-11.04569 -8.95431,-20 -20,-20z" fill="#29b6f6"></path><path d="M33.95,15l-3.746,19.126c0,0 -0.161,0.874 -1.245,0.874c-0.576,0 -0.873,-0.274 -0.873,-0.274l-8.114,-6.733l-3.97,-2.001l-5.095,-1.355c0,0 -0.907,-0.262 -0.907,-1.012c0,-0.625 0.933,-0.923 0.933,-0.923l21.316,-8.468c-0.001,-0.001 0.651,-0.235 1.126,-0.234c0.292,0 0.625,0.125 0.625,0.5c0,0.25 -0.05,0.5 -0.05,0.5z" fill="#ffffff"></path><path d="M23,30.505l-3.426,3.374c0,0 -0.149,0.115 -0.348,0.12c-0.069,0.002 -0.143,-0.009 -0.219,-0.043l0.964,-5.965z" fill="#b0bec5"></path><path d="M29.897,18.196c-0.169,-0.22 -0.481,-0.26 -0.701,-0.093l-13.196,7.897c0,0 2.106,5.892 2.427,6.912c0.322,1.021 0.58,1.045 0.58,1.045l0.964,-5.965l9.832,-9.096c0.22,-0.167 0.261,-0.48 0.094,-0.7z" fill="#cfd8dc"></path></g></g>
</svg>
</button>

            <button><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
<g fill="#dc1919" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" ><g transform="scale(8,8)"><path d="M19.663,4h-3.493c-3.432,0 -6.17,2.72 -6.17,8c0,3.168 1.237,5.504 3.749,6.656l-4.688,8.832c-0.153,0.289 0,0.512 0.245,0.512h2.175c0.184,0 0.307,-0.064 0.368,-0.223l4.401,-8.777h1.25l-0.008,8.777c0,0.096 0.092,0.223 0.214,0.223h2.049c0.184,0 0.245,-0.096 0.245,-0.255v-23.425c0,-0.224 -0.123,-0.32 -0.337,-0.32zM17.5,17h-1.5c-1.5,0 -3.5,-1.16 -3.5,-5c0,-4.001 1.631,-6 3.5,-6h1.5z"></path></g></g>
</svg></button>

            <button><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg></button>
</div>
           </div>

       <div className='swith_login_register-container'>
        <h3>
         {isLogin ? 'У вас нет аккаунта?' : 'Уже есть аккаунт'}</h3>
           <button
           onClick={handlerSwitch}
           >{isLogin ?  'Зарегистрироваться.' : 'Войти с помощью логина' }</button>
       
       </div>
      

      </form>
     </div>
  )
}
