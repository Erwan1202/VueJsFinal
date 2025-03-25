<template>
    <Layout>
      <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 class="text-3xl font-semibold text-gray-700 mb-6">Votre Panier</h1>
  
        <div v-if="cartItems.length === 0" class="text-center text-gray-500">
          <p>Votre panier est vide. Ajoutez des articles !</p>
          <router-link to="/" class="text-red-500 hover:text-red-700">Retour à l'accueil</router-link>
        </div>
  
        <div v-else>
          <div class="space-y-4">
            <div v-for="(item, index) in cartItems" :key="index" class="flex justify-between items-center py-4 border-b">
              <div class="flex items-center gap-4">
                <img :src="item.image" alt="Product" class="w-16 h-16 object-cover rounded">
                <div>
                  <p class="font-semibold text-gray-800">{{ item.name }}</p>
                  <p class="text-gray-500 text-sm">{{ item.description }}</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <input type="number" v-model="item.quantity" min="1" class="w-16 p-2 border rounded text-center" @change="updateCart(item)">
                <p class="text-gray-800">{{ item.price | currency }} €</p>
                <button @click="removeFromCart(item)" class="text-red-500 hover:text-red-700">Supprimer</button>
              </div>
            </div>
          </div>
  
          <div class="flex justify-between items-center mt-6 border-t pt-4">
            <p class="font-semibold text-xl text-gray-800">Total : <span>{{ totalAmount | currency }} €</span></p>
            <router-link to="/checkout" class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700">Passer à la caisse</router-link>
          </div>
        </div>
      </div>
    </Layout>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import Layout from '@/components/Layout.vue';
  import { state as cartState, updateCart, removeFromCart } from '@/store/cart';
  
  const cartItems = computed(() => cartState.items);
  
  const totalAmount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });
  
  const updateCartItem = (item) => {
    updateCart(item);
  };
  
  const removeFromCart = (item) => {
    removeFromCart(item);
  };
  </script>
  

  