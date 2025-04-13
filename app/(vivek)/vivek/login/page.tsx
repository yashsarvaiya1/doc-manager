'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <div className="text-5xl mb-2">📁</div>
          <h2 className="text-2xl font-bold text-gray-900">DocuVault</h2>
          <p className="text-gray-600">Your secure document management solution</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex justify-center mb-4 border-b border-gray-200">
            <button
              className={`px-4 py-2 text-sm font-medium ${isLogin ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${!isLogin ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          {isLogin ? (
            <form className="space-y-4">
              <div>
                <label className="label">Email address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-blue-500" />
                  Remember me
                </label>
                <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
              </div>
              <button type="submit" className="button">Sign in</button>

              <div className="relative text-center">
                <span className="absolute inset-x-0 top-1/2 border-t border-gray-300"></span>
                <span className="relative px-2 text-sm bg-white text-gray-500">Or continue with</span>
              </div>

              <button className="socialButton">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span className="text-gray-700">Sign in with Google</span>
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="label">Full Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="label">Email address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="••••••••"
                />
              </div>
              <button type="submit" className="button">Register</button>
            </form>
          )}
        </div>

        <p className="text-xs text-center text-gray-500">
          By signing in, you agree to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
