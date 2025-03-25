<script setup>
import { computed } from 'vue';
import { state, removeFromCart, updateQuantity, clearCart } from '@/store/cart';

const cartItems = computed(() => state.items);
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold">🛒 Votre Panier</h1>

    <div v-if="cartItems.length === 0" class="mt-4">
      <p>Votre panier est vide.</p>
    </div>

    <div v-else class="mt-4">
      <div v-for="item in cartItems" :key="item.id" class="flex justify-between p-4 border-b">
        <div>
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <p>{{ item.price }} €</p>
          <input type="number" v-model="item.quantity" @change="updateQuantity({ productId: item.id, quantity: item.quantity })" class="border p-2 w-16">
        </div>
        <button @click="removeFromCart(item.id)" class="bg-red-600 text-white px-4 py-2">Supprimer</button>
      </div>

      <button @click="clearCart" class="mt-4 bg-gray-800 text-white px-4 py-2">Vider le panier</button>
    </div>
  </div>
</template>
