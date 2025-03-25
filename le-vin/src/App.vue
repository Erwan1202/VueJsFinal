<template>
  <nav class="bg-gray-800 text-white p-4 flex gap-4">
    <router-link to="/" class="hover:underline">Accueil</router-link>
    <router-link to="/login" class="hover:underline">Connexion</router-link>
  </nav>
  <router-view />
</template>
