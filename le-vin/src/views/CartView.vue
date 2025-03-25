<script setup>
import { computed } from 'vue';
import AppAppLayout from '@/components/AppLayout.vue';
import { state as cartState, updateQuantity, removeFromCart } from '@/store/cart';

const cartItems = computed(() => cartState.items);

const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

const updateCart = (item) => {
  updateQuantity({ productId: item.id, quantity: item.quantity });
};

const removeFromCartItem = (item) => {
  removeFromCart(item.id);
};
</script>

<template>
  <AppAppLayout>
    <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 class="text-3xl font-semibold text-gray-700">Panier</h1>

      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="flex items">
          <img :src="item.image" alt="Produit" class="w-24 h-24 object-cover rounded">
          <div class="flex-1 ml-4">
            <h2 class="text-xl font-semibold text-gray-800">{{ item.name }}</h2>
            <p class="text-gray-500 mt-2">{{ item.price }} €</p>
            <div class="mt-4">
              <input type="number" v-model="item.quantity" min="1" @change="updateCart(item)" class="w-16 p-2 border rounded text-center">
              <button @click="removeFromCartItem(item)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition ml-4">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    <p v-else class="text-center text-gray-500">Votre panier est vide.</p>
    <p v-if="cartItems.length > 0" class="text-right text-xl font-bold text-gray-800 mt-4">Total : {{ totalAmount }} €</p>
  </div>
</AppAppLayout>
</template>

  