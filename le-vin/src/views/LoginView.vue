<script setup>
import { ref } from 'vue';
import { login } from '@/store/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  await login({ email: email.value });
  router.push('/'); // Redirige vers l'accueil après connexion
};
</script>

<template>
  <div class="flex flex-col items-center p-6">
    <h1 class="text-2xl font-semibold">Connexion</h1>
    <form class="mt-4" @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" class="border p-2 mb-2 w-full">
      <input v-model="password" type="password" placeholder="Mot de passe" class="border p-2 w-full">
      <button class="mt-4 bg-red-600 text-white px-4 py-2">Se connecter</button>
    </form>
  </div>
</template>
