import React, { createContext, useCallback, useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const AuthContext = createContext({});

const asyncStorageKeys = {
  token: '@QuemEstaPelaUtf:token',
  isAdmin: '@QuemEstaPelaUtf:isAdmin',
};

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loadStorageData = async () => {
      const token = await AsyncStorage.getItem(asyncStorageKeys.token);
      const isAdmin = await AsyncStorage.getItem(asyncStorageKeys.isAdmin);

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token });
      }

      if (isAdmin === 'true') {
        setIsAdmin(true);
      }

      setLoading(false);
    };

    loadStorageData();
  }, []);

  const logIn = useCallback(async ({ username = '', email = '', password }) => {
    const response = await api.post('auth/login', { username, email, password });

    const { token } = response.data;

    await AsyncStorage.setItem(asyncStorageKeys.token, token);
    await AsyncStorage.setItem(asyncStorageKeys.isAdmin, 'false');

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token });
  }, []);

  const adminLogIn = useCallback(async ({ username = '', email = '', password }) => {
    const response = await api.post('admin/login', { username, email, password });

    const { token } = response.data;

    await AsyncStorage.setItem(asyncStorageKeys.token, token);
    await AsyncStorage.setItem(asyncStorageKeys.isAdmin, 'true');

    api.defaults.headers.authorization = `Bearer ${token}`;

    setIsAdmin(true);
    setData({ token });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem(asyncStorageKeys.token);

    setIsAdmin(false);
    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ loading, isAdmin, data, logIn, adminLogIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
};

export { AuthProvider, useAuth };
