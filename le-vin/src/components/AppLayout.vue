<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-gray-900 text-white p-4 flex justify-between">
      <div class="flex gap-4">
        <router-link to="/" class="hover:text-red-500 transition">Accueil</router-link>
        <router-link v-if="!user" to="/login" class="hover:text-red-500 transition">Connexion</router-link>
        <router-link to="/cart" class="hover:text-red-500 transition">
          Panier <span class="bg-red-500 px-2 py-1 text-sm rounded">{{ cartItemCount }}</span>
        </router-link>
      </div>
      <div v-if="user" class="flex gap-4">
        <span class="font-semibold">{{ user.email }}</span>
        <button @click="logout" class="bg-red-600 px-3 py-1 rounded">Déconnexion</button>
      </div>
    </nav>
    <main class="flex-1 p-6">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white text-center p-4">
      © 2025 UnPetit20SVP - Tous droits réservés
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { state as authState, logout } from '@/store/auth';
import { state as cartState } from '@/store/cart';

const user = computed(() => authState.user);
const cartItemCount = computed(() => cartState.items.reduce((acc, item) => acc + item.quantity, 0));
</script>

<script>
export default {
name: 'AppAppLayout',
};
</script>