<template>
  <header>
    <div class="d-flex">
      <img src="/src\assets\cartoon.png" alt="pinia logo" />
      <h1>KIDKID-TV</h1>
    </div>

    <div class="nav">
      <nav>
        <router-link :to="{ name: 'home' }">{{ $t("nav.home") }}</router-link> |
        <router-link :to="{ name: 'manage' }">{{
          $t("nav.manage-cartoon")
        }}</router-link>
        |
        <router-link :to="{ name: 'about' }">{{ $t("nav.about") }}</router-link>
        |
      </nav>
      <SwitchLanguage />
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import SwitchLanguage from "./components/SwitchLanguage.vue";
</script>

<style scoped>
.d-flex {
  display: flex;
  flex-direction: row;
}
.nav{
  display: flex;
}
.nav nav {
  padding: 30px 0 30px 30px;
}
</style>
