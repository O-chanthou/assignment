<template>
  <header>
    <div class="d-flex">
      <img src="/src\assets\cartoon.png" alt="pinia logo" />
      <h1>KIDKID-TV</h1>
    </div>

    <nav>
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>

    </nav>
  </header>
  
  <main>
      <RouterView />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.d-flex{
  display: flex;
}
</style>
