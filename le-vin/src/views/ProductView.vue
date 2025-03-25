<template>
    <Layout>
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
    </Layout>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Layout from '@/components/Layout.vue';
  import { state as cartState, addToCart } from '@/store/cart';

  const product = ref(null);
  const quantity = ref(1);
  const route = useRoute();
  

    const products = [
      { id: 1, name: 'Vin Rouge Bordeaux', description: 'Un excellent Bordeaux.', price: 15, image: '/images }/bordeaux.jpg' },
      { id: 2, name: 'Vin Blanc Chardonnay', description: 'Un Chardonnay fruité.', price: 12, image: '/images/chardonnay.jpg' },
      { id: 3, name: 'Vin Rosé Côtes de Provence', description: 'Un rosé de Provence.', price: 10, image: '/images/cotes-de-provence.jpg' },
      ];
  
  </script>

  