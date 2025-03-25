import { createStore } from '@harlem/core';
import storage from '@harlem/plugin-storage';

const STATE = {
  items: [],
};

const cartStore = createStore('cart', STATE, {
  plugins: [storage({ type: 'local', prefix: 'cart' })], // Persistance dans localStorage
});

export const { state, mutation, action } = cartStore;

export const addToCart = mutation('addToCart', (state, product) => {
  const item = state.items.find((i) => i.id === product.id);
  if (item) {
    item.quantity += 1; 
    state.items.push({ ...product, quantity: 1 });
  }
});

export const removeFromCart = mutation('removeFromCart', (state, productId) => {
  state.items = state.items.filter((item) => item.id !== productId);
});

export const updateQuantity = mutation('updateQuantity', (state, { productId, quantity }) => {
  const item = state.items.find((i) => i.id === productId);
  if (item && quantity > 0) {
    item.quantity = quantity;
  } else {
    state.items = state.items.filter((i) => i.id !== productId);
  }
});

export const clearCart = action('clearCart', ({ mutate }) => {
  mutate('reset'); 
});
