<template>
    <AppLayout>
      <div class="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 class="text-2xl font-semibold text-gray-700">Connexion</h1>
        <form class="mt-4" @submit.prevent="handleLogin">
          <input v-model="email" type="email" placeholder="Email" class="border p-2 w-full mb-2 rounded">
          <input v-model="password" type="password" placeholder="Mot de passe" class="border p-2 w-full rounded">
          <button class="mt-4 w-full bg-red-600 text-white py-2 rounded">Se connecter</button>
        </form>
      </div>
    </AppLayout>
  </template>
  
  <script setup>
  import AppLayout from '@/components/AppLayout.vue';
  import { ref } from 'vue';
  import { login } from '@/store/auth';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleLogin = async () => {
    await login({ email: email.value });
    router.push('/');
  };
  </script>
  