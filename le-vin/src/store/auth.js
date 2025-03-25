import { createStore } from '@harlem/core';
import storage from '@harlem/plugin-storage';

const STATE = {
  user: null, 
};

const authStore = createStore('auth', STATE, {
  plugins: [storage({ type: 'local', prefix: 'auth' })], 
});

export const { state, getter, mutation, action } = authStore;

export const isAuthenticated = getter('isAuthenticated', (state) => !!state.user);

export const setUser = mutation('setUser', (state, user) => {
  state.user = user;
});

export const login = action('login', async ({ commit }, { email }) => {
  const user = { email };
  commit(setUser, user); 
});

export const logout = action('logout', ({ commit }) => {
  commit(setUser, null); 
});