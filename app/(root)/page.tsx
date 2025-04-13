'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Logo and title */}
      <div className="flex flex-col items-center mb-6">
        <Image src="/image.png" width={48} height={48} alt="Folder logo" />
        <h1 className="text-3xl font-bold text-gray-800 mt-2">DocuVault</h1>
        <p className="text-gray-500">Your secure document management solution</p>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-xl shadow p-6">
        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b border-gray-200 mb-4">
          <button
            className={`text-sm font-semibold pb-2 ${isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`text-sm font-semibold pb-2 ${!isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Conditional fields based on login/register */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          )}

          {/* Remember + forgot */}
          {isLogin && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>
          )}

          {/* Sign in / Register button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            {isLogin ? 'Sign in' : 'Register'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <hr className="flex-grow border-gray-200" />
          <span className="text-sm text-gray-400">Or continue with</span>
          <hr className="flex-grow border-gray-200" />
        </div>

        {/* Google Sign In */}
        <button 
          type="button"
          onClick={() => router.push('/dashboard')} // Also redirect on Google button click
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span className="text-sm text-gray-700 font-medium">Sign in with Google</span>
        </button>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-6">
        By signing in, you agree to our{' '}
        <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
      </p>
    </main>
  );
}
