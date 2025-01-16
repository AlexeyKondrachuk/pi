import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
  
      // Статическая проверка логина и пароля
      if (username === 'admin' && password === '1234') {
        // Сохранение статуса авторизации (например, в localStorage)
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/admin'); // Перенаправление на защищённую страницу
      } else {
        setError('Неверный логин или пароль');
      }
    };
  
    return (
      <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
        <h1>Авторизация</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Логин:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;