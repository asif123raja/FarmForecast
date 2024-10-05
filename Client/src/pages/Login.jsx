import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (email === "test@example.com" && password === "password") {
      alert('Login successful!');
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            {/* Use InputField for Email */}
            <InputField
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {/* Use InputField for Password */}
            <InputField
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </div>
            <p className="mt-4 text-center">
              Don't have an account? <Link to="/signup" className="text-blue-600">Sign up here</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
