import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="bg-fixed bg-center h-screen" style={{ backgroundImage: `url('/images/bg.jpg')` }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <form className="bg-black bg-opacity-70 p-8 rounded-lg text-white w-80">
          <h2 className="text-2xl mb-6 text-center">Login</h2>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 mb-4 bg-transparent bg-opacity-50 border-b border-gray-600 focus:outline-none focus:border-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 mb-4 bg-transparent bg-opacity-50 border-b border-gray-600 focus:outline-none focus:border-pink-500"
          />
          <button
            type="submit"
            className="w-full p-3 mb-4 bg-pink-600 rounded-md hover:bg-pink-700 transition-colors"
          >
            Login
          </button>
          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/Register" className='text-pink-600'>Sign up</Link>
          </p>
        </form>
        </div>
    </div>
    </>
  );
}