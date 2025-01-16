// import React from 'react';
// import { useSignOutMutation } from '../../../Redux/services/authApi'; // Импортируем хук


// const Logout = () => {
//   const [signOut] = useSignOutMutation();


//   const handleLogout = async () => {
//     try {
//       await signOut().unwrap(); // Выполняем запрос на выход
    
//     } catch (err) {
//       console.error('Ошибка при выходе:', err);
//     }
//   };

//   return <button onClick={handleLogout}>Выйти</button>;
// };

// export default Logout;