import React, { useState } from 'react';

interface LoginPageProps {
  onSubmit: (username: string, password: string) => void;
  onSignUp: (
    firstName: string,
    lastName: string,
    username: string,
    password: string,
  ) => void;
  onForgotPassword: (email: string) => void;
}

type ScreenType = 'login' | 'signup' | 'forgot-password';

export const LoginPage: React.FC<LoginPageProps> = ({
  onSubmit,
  onSignUp,
  onForgotPassword,
}) => {
  const [screen, setScreen] = useState<ScreenType>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (screen === 'login') {
      onSubmit(username, password);
    } else if (screen === 'signup') {
      onSignUp(firstName, lastName, username, password);
    } else if (screen === 'forgot-password') {
      onForgotPassword(email);
    }
  };

  const renderForm = () => {
    switch (screen) {
      case 'login':
        return (
          <>
            <div className="relative mb-50">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="peer w-full px-30 py-20 border border-color6 rounded-sm focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent text-text"
                placeholder=" "
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <label
                htmlFor="username"
                className="absolute left-30 -top-10 bg-white px-10 text-sm text-text-alpha-50 transition-all peer-placeholder-shown:top-20 peer-placeholder-shown:text-basetext peer-focus:-top-10 peer-focus:text-sm"
              >
                Username
              </label>
            </div>
            <div className="relative mb-50">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="peer w-full px-30 py-20 border border-color6 rounded-sm focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent text-text pr-50"
                placeholder=" "
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute left-30 -top-10 bg-white px-10 text-sm text-text-alpha-50 transition-all peer-placeholder-shown:top-20 peer-placeholder-shown:text-basetext peer-focus:-top-10 peer-focus:text-sm"
              >
                Password
              </label>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-30 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className="h-20 w-20 text-color7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-20 w-20 text-color7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                )}
              </button>
            </div>
          </>
        );
      case 'signup':
        return (
          <>
            <div className="relative mb-50">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="peer w-full px-30 py-20 border border-color6 rounded-sm focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent text-text"
                placeholder=" "
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <label
                htmlFor="firstName"
                className="absolute left-30 -top-10 bg-white px-10 text-sm text-text-alpha-50 transition-all peer-placeholder-shown:top-20 peer-placeholder-shown:text-basetext peer-focus:-top-10 peer-focus:text-sm"
              >
                First Name
              </label>
            </div>
            <div className="relative mb-50">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="peer w-full px-30 py-20 border border-color6 rounded-sm focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent text-text"
                placeholder=" "
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <label
                htmlFor="lastName"
                className="absolute left-30 -top-10 bg-white px-10 text-sm text-text-alpha-50 transition-all peer-placeholder-shown:top-20 peer-placeholder-shown:text-basetext peer-focus:-top-10 peer-focus:text-sm"
              >
                Last Name
              </label>
            </div>
            <div className="relative mb-50">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="peer w-full px-30 py-20 border border-color6 rounded-sm focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent text-text"
                placeholder=" "
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <label
                htmlFor="username"
                className="absolute left-30 -top-10 bg-white px-10 text-sm text-text-alpha-50 transition-all peer-placeholder-shown:top-20 peer-placeholder-shown:text-basetext peer-focus:-top-10 peer-focus:text-sm"
              >
                Choose a username
              </label>
            </div>
            <div className="relative mb-50">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="peer w-full px-30 py-20 border border-color6 rounded-sm focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent text-text pr-50"
                placeholder=" "
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute left-30 -top-10 bg-white px-10 text-sm text-text-alpha-50 transition-all peer-placeholder-shown:top-20 peer-placeholder-shown:text-basetext peer-focus:-top-10 peer-focus:text-sm"
              >
                Choose a password
              </label>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-30 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className="h-20 w-20 text-color7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-20 w-20 text-color7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                )}
              </button>
            </div>
          </>
        );
      case 'forgot-password':
        return (
          <div className="relative mb-50">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="peer w-full px-30 py-20 border border-color6 rounded-sm focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent text-text"
              placeholder=" "
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="absolute left-30 -top-10 bg-white px-10 text-sm text-text-alpha-50 transition-all peer-placeholder-shown:top-20 peer-placeholder-shown:text-basetext peer-focus:-top-10 peer-focus:text-sm"
            >
              Your email address
            </label>
          </div>
        );
    }
  };

  const renderButtonText = () => {
    switch (screen) {
      case 'login':
        return 'Sign in';
      case 'signup':
        return 'Sign up';
      case 'forgot-password':
        return 'Reset password';
    }
  };

  const renderTitle = () => {
    switch (screen) {
      case 'login':
        return 'Sign in to your account';
      case 'signup':
        return 'Create a new account';
      case 'forgot-password':
        return 'Reset your password';
    }
  };

  return (
    <div className="min-h-screen bg-bg-l1 flex items-center justify-center px-40 sm:px-60 lg:px-80">
      <div className="max-w-md w-full space-y-80 bg-white p-80 rounded-md shadow-md">
        <div>
          <h2 className="mt-60 text-center text-lg font-extrabold text-text">
            {renderTitle()}
          </h2>
        </div>
        <form className="mt-80 space-y-60" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">{renderForm()}</div>

          <div className="flex items-center justify-between">
            {screen === 'login' && (
              <>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-color1 hover:text-color1-800"
                    onClick={e => {
                      e.preventDefault();
                      setScreen('forgot-password');
                    }}
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-color1 hover:text-color1-800"
                    onClick={e => {
                      e.preventDefault();
                      setScreen('signup');
                    }}
                  >
                    Sign up
                  </a>
                </div>
              </>
            )}
            {(screen === 'signup' || screen === 'forgot-password') && (
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-color1 hover:text-color1-800"
                  onClick={e => {
                    e.preventDefault();
                    setScreen('login');
                  }}
                >
                  Back to login
                </a>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-20 px-40 border border-transparent text-sm font-medium rounded-sm text-white bg-gradient-to-r from-color1 to-color1-900 hover:from-color1-800 hover:to-color1-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color1"
            >
              {renderButtonText()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
