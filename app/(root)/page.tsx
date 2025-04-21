'use client';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

type FormData = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);




  useEffect(() => {
    const token = Cookies.get('access_token');

    if (token) {
      router.push('/dashboard');
    }
  }, []);



  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = watch('password');

  const toggleForm = (mode: boolean) => {
    setIsLogin(mode);
    reset();
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      if (!isLogin) {
        // REGISTER
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            full_name: data.name,
            email: data.email,
            password: data.password,
            password2: data.confirmPassword,
          }),
        });

        const result = await res.json();

        if (!res.ok) {
          toast.error(result.detail || 'Registration failed');
          return;
        }

        toast.success('Registration successful, logging in...');

        // AUTO LOGIN
        const loginRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });

        const loginData = await loginRes.json();

        if (!loginRes.ok) {
          toast.error(loginData.detail || 'Login after registration failed');
          return;
        }

        Cookies.set('access_token', loginData.access, { expires: 7 });
        toast.success('Logged in! Redirecting...');
        router.push('/dashboard');
      } else {
        // LOGIN
        const loginRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });

        const loginData = await loginRes.json();

        if (!loginRes.ok) {
          toast.error(loginData.detail || 'Invalid login credentials');
          return;
        }

        Cookies.set('access_token', loginData.access, { expires: 7 });
        toast.success('Welcome back!');
        router.push('/dashboard');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Toaster position="top-right" />
      <div className="flex flex-col items-center mb-6">
        <Image src="/Login_Register_Logo.png" width={150} height={150} alt="Folder logo" />
        <p className="text-gray-500">Your secure document management solution</p>
      </div>

      <div className="form-container">
        <div className="flex justify-center space-x-6 border-b border-gray-200 mb-4">
          <button
            className={`tab-button ${isLogin ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => toggleForm(true)}
          >
            Sign In
          </button>
          <button
            className={`tab-button ${!isLogin ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => toggleForm(false)}
          >
            Register
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 transition-all duration-500 ease-in-out"
        >
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register('name', { required: true })}
                className="input-box"
              />
              {errors.name && <p className="error-text">Name is required</p>}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="user@domain.com"
              {...register('email', { required: 'Email is required' })}
              className="input-box"
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              autoComplete="new-password"
              {...register('password', { required: 'Password is required' })}
              className="input-box pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye /> }
            </button>
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>


          {!isLogin && (
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="********"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === password || 'Passwords do not match',
                })}
                className="input-box pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-500"
                tabIndex={-1}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword.message}</p>
              )}
            </div>
          )}


          {isLogin && (
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 accent-[#168190]"
                />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="text-[#168190] hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className={`primary-button flex items-center justify-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              isLogin ? 'Sign in' : 'Register'
            )}
          </button>
          {/* Divider shown for both Sign In and Register */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Google login shown in both tabs */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-3 border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition"
            onClick={() => {
              toast('Google login not implemented yet.', { icon: '⚠️' });
            }}
          >
            <FaGoogle className="text-[#168190]" />
            <span className="text-sm text-gray-700 font-medium">
              {isLogin ? 'Continue with Google' : 'Sign up with Google'}
            </span>
          </button>
        </form>
      </div>
      <p className="disclaimer">
        By signing in, you agree to our{' '}
        <a href="#" className="link">Terms of Service</a> and{' '}
        <a href="#" className="link">Privacy Policy</a>.
      </p>
    </main >
  );
}
