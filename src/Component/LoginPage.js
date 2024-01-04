import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFailure, loginSuccess } from '../Store/authSlice';
import { login } from '../authService';

function LoginPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(username, password);

      if (response.token) {
        localStorage.setItem('user', username);
        localStorage.setItem('token', response.token);
        dispatch(loginSuccess(response));
      } else {
        dispatch(loginFailure(response));
      }
    } catch (error) {
      dispatch(loginFailure({ error: 'An error occurred during login.' }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Welcome to Shopy Website</h2>
        <ins className="block text-center font-bold text-2xl mb-10">Please Login</ins>

        <form onSubmit={handleLogin}>
          <label className="block mb-4">
            <span className="text-gray-700">Username:</span>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
