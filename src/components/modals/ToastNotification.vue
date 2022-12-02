<template>
  <div class="toast-wrapper">
    <div class="toast" :style="{ background: msgColor }">
      {{ msgDelete ? "Successfully" : "Something when wrong..." }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  msgDelete: Boolean,
});

const msgColor = ref("");

const checkMsgDelete = () => {
  if (props.msgDelete) {
    msgColor.value = "#499f45";
  } else {
    msgColor.value = "#ff3333";
  }
};

checkMsgDelete();
</script>

<style>
.toast-wrapper {
  position: fixed;
  top: 120px;
  right: 120px;
}
.toast {
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  width: 300px;
  justify-content: center;
  text-align: center;
}
</style>
