<template>
    <AppLayout>
      <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div v-if="product">
          <div class="flex gap-6">
            <img :src="product.image" alt="Produit" class="w-64 h-64 object-cover rounded">
            <div>
              <h1 class="text-3xl font-semibold text-gray-700">{{ product.name }}</h1>
              <p class="text-gray-500 mt-2">{{ product.description }}</p>
              <p class="text-xl font-bold text-gray-800 mt-4">{{ product.price }} €</p>
  
              <div class="mt-4">
                <input type="number" v-model="quantity" min="1" class="w-16 p-2 border rounded text-center">
                <button @click="addToCart" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition ml-4">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="text-center text-gray-500">Chargement du produit...</p>
      </div>
    </AppLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AppLayout from '@/components/AppLayout.vue';
  import { addToCart } from '@/store/cart';

  const product = ref(null);
  const quantity = ref(1);
  

  
  </script>

  