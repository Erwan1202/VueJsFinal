<script setup>
import { computed } from 'vue';
import { state as authState, logout } from '@/store/auth';
import { state as cartState } from '@/store/cart';

const user = computed(() => authState.user);
const cartItemCount = computed(() => cartState.items.reduce((acc, item) => acc + item.quantity, 0));
</script>

<template>
  <nav class="bg-gray-800 text-white p-4 flex justify-between">
    <div class="flex gap-4">
      <router-link to="/" class="hover:underline">Accueil</router-link>
      <router-link v-if="!user" to="/login" class="hover:underline">Connexion</router-link>
      <router-link to="/cart" class="hover:underline">Panier ({{ cartItemCount }})</router-link>
    </div>
    <div v-if="user" class="flex gap-4">
      <span>{{ user.email }}</span>
      <button @click="logout" class="bg-red-600 px-3 py-1">Déconnexion</button>
    </div>
  </nav>
  <router-view />
</template>
