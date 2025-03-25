<template>
  <AppLayout>
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800">Bienvenue sur <span class="text-red-600">UnPetit20SVP</span> 🍷</h1>
      <p class="text-gray-600 mt-2">Votre boutique en ligne pour les amateurs de vin.</p>
    </div>

    <div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-lg p-4">
        <img :src="product.image" alt="Vin" class="w-full h-48 object-cover rounded">
        <h2 class="text-lg font-semibold text-gray-800 mt-2">{{ product.name }}</h2>
        <p class="text-gray-600 text-sm">{{ product.description }}</p>
        <p class="text-lg font-bold text-gray-900 mt-2">{{ product.price }} €</p>
        <router-link :to="'/product/' + product.id" class="block mt-3 bg-red-500 text-white text-center py-2 rounded hover:bg-red-700">
          Voir le produit
        </router-link>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue';
import { ref } from 'vue';

const products = ref([
{ id: 1, name: 'Vin Rouge Bordeaux', description: 'Un excellent Bordeaux.', price: 15, image: '/images }/bordeaux.jpg' },
      { id: 2, name: 'Vin Blanc Chardonnay', description: 'Un Chardonnay fruité.', price: 12, image: '/images/chardonnay.jpg' },
      { id: 3, name: 'Vin Rosé Côtes de Provence', description: 'Un rosé de Provence.', price: 10, image: '/images/cotes-de-provence.jpg' },
]);
</script>
