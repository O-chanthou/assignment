<template>
  <div class="l-container">
    <select
      :value="$i18n.locale"
      @change="setLocale($event.target.value)"
      id="locale"
      class="language"
    >
      <option v-for="locale in allLocales" :value="locale">
        {{ $t(`nav.${locale}`) }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { allLocales, setLocale } from "../shared/utils/i18n";
</script>

<style scoped>
.l-container {
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 25px;
}
.language {
  text-align: center;
  width: 100px;
  height: 40px;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
}
</style>
