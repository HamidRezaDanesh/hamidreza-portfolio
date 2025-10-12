// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  loginAttempts: number;
  isLocked: boolean;
  lockoutTime: number | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_PASSWORD = 'portfolio2024';
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes
const SESSION_DURATION = 60 * 60 * 1000; // 1 hour

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState<number | null>(null);
  const [lastActivity, setLastActivity] = useState<number>(Date.now());

  useEffect(() => {
    const session = localStorage.getItem('admin_session');
    const sessionTime = localStorage.getItem('admin_session_time');
    const attempts = localStorage.getItem('login_attempts');
    const lockout = localStorage.getItem('lockout_time');

    if (attempts) {
      setLoginAttempts(parseInt(attempts));
    }

    if (lockout) {
      const lockoutTimestamp = parseInt(lockout);
      if (Date.now() < lockoutTimestamp) {
        setIsLocked(true);
        setLockoutTime(lockoutTimestamp);
      } else {
        localStorage.removeItem('lockout_time');
        localStorage.removeItem('login_attempts');
        setLoginAttempts(0);
      }
    }

    if (session === 'active' && sessionTime) {
      const sessionTimestamp = parseInt(sessionTime);
      if (Date.now() - sessionTimestamp < SESSION_DURATION) {
        setIsAuthenticated(true);
        setLastActivity(Date.now());
      } else {
        logout();
      }
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const checkActivity = setInterval(() => {
      if (Date.now() - lastActivity > SESSION_DURATION) {
        logout();
      }
    }, 60000);

    return () => clearInterval(checkActivity);
  }, [isAuthenticated, lastActivity]);

  useEffect(() => {
    if (!isLocked || !lockoutTime) return;

    const checkLockout = setInterval(() => {
      if (Date.now() >= lockoutTime) {
        setIsLocked(false);
        setLockoutTime(null);
        setLoginAttempts(0);
        localStorage.removeItem('lockout_time');
        localStorage.removeItem('login_attempts');
      }
    }, 1000);

    return () => clearInterval(checkLockout);
  }, [isLocked, lockoutTime]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const updateActivity = () => {
      setLastActivity(Date.now());
    };

    window.addEventListener('mousedown', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('scroll', updateActivity);
    window.addEventListener('touchstart', updateActivity);

    return () => {
      window.removeEventListener('mousedown', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('scroll', updateActivity);
      window.removeEventListener('touchstart', updateActivity);
    };
  }, [isAuthenticated]);

  const login = (password: string): boolean => {
    if (isLocked) {
      return false;
    }

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginAttempts(0);
      setLastActivity(Date.now());
      localStorage.setItem('admin_session', 'active');
      localStorage.setItem('admin_session_time', Date.now().toString());
      localStorage.removeItem('login_attempts');
      localStorage.removeItem('lockout_time');
      return true;
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      localStorage.setItem('login_attempts', newAttempts.toString());

      if (newAttempts >= MAX_ATTEMPTS) {
        const lockoutTimestamp = Date.now() + LOCKOUT_DURATION;
        setIsLocked(true);
        setLockoutTime(lockoutTimestamp);
        localStorage.setItem('lockout_time', lockoutTimestamp.toString());
      }

      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setLastActivity(Date.now());
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_session_time');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        loginAttempts,
        isLocked,
        lockoutTime,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}