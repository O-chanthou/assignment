<template>
  <div class="manage-ctn-container">
    <router-link :to="{ name: 'add' }">
      <div class="add-cartoon">Add Cartoon</div></router-link
    >
    <router-link :to="{ name: 'update-delete' }">
      <div class="delete-cartoon">Update / Delete Cartoon</div></router-link
    >
  </div>
</template>

<script setup></script>

<style scoped>
.manage-ctn-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  text-align: center;
  margin: 40px;
  height: 100px;
}

.add-cartoon {
  grid-area: 1 / 1 / 2 / 2;
  background: #44a158;
  padding: 30px;
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 25px 25px 0;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.delete-cartoon {
  grid-area: 1 / 2 / 2 / 3;
  background: #CE1F1FFD;
  padding: 30px;
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0 25px 25px;
  border-radius: 10px;
  box-shadow: rgba(67, 60, 60, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
a {
  color: inherit;
  text-decoration: none;
  font-size: 1.6em;
  font-weight: bold;
}
.add-cartoon:hover {
  box-shadow: rgba(113, 226, 98, 0.877) 0px 1px 2px 0px,
    rgb(57, 219, 71) 0px 2px 6px 2px;
}
.update-cartoon:hover {
  box-shadow: rgba(245, 72, 72, 0.3) 0px 1px 2px 0px,
    rgba(252, 46, 46, 0.692) 0px 2px 6px 2px;
}
.delete-cartoon:hover {
  box-shadow: rgba(245, 72, 72, 0.3) 0px 1px 2px 0px,
    rgba(252, 46, 46, 0.692) 0px 2px 6px 2px;
}
</style>
