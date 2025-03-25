import { createStore } from '@harlem/core';
import storage from '@harlem/plugin-storage';

const STATE = {
  user: null, 
};

const authStore = createStore('auth', STATE, {
  plugins: [storage({ type: 'local', prefix: 'auth' })], // Persistance dans localStorage
});

export const { state, getter, mutation, action } = authStore;

export const isAuthenticated = getter('isAuthenticated', (state) => !!state.user);

export const setUser = mutation('setUser', (state, user) => {
  state.user = user;
});


export const login = action('login', async ({ mutate }, { email }) => {
  const user = { email }; 
});


export const logout = action('logout', ({ mutate }) => {
  mutate(setUser, null);
});
