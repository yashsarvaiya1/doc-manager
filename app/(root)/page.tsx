'use client'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type FormData = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<FormData>();

  const toggleForm = (mode: boolean) => {
    setIsLogin(mode);
    reset();
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    // router.push('/dashboard');
  };

  const password = watch('password');

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center mb-6">
        <Image src="/Login_Register_Logo.png" width={150} height={150} alt="Folder logo" />
        {/* <h1 className="text-3xl font-bold text-gray-800 mt-2">DocSyncX</h1> */}
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 transition-all duration-500 ease-in-out">
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

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              {...register('password', { required: 'Password is required' })}
              className="input-box"
            />
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === password || 'Passwords do not match'
                })}
                className="input-box"
              />
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword.message}</p>
              )}
            </div>
          )}

          {isLogin && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Remember me
              </label>
              <a href="#" className="link">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="primary-button">
            {isLogin ? 'Sign in' : 'Register'}
          </button>
        </form>

        <div className="divider">
          <hr className="flex-grow border-gray-200" />
          <span className="text-sm text-gray-400">Or continue with</span>
          <hr className="flex-grow border-gray-200" />
        </div>

        <button
          type="button"
          onClick={() => router.push('/dashboard')}
          className="google-button"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span className="text-sm text-gray-700 font-medium">Sign in with Google</span>
        </button>
      </div>

      <p className="disclaimer">
        By signing in, you agree to our{' '}
        <a href="#" className="link">Terms of Service</a> and{' '}
        <a href="#" className="link">Privacy Policy</a>.
      </p>
    </main>
  );
}
