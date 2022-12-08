<template>
  <div class="toast-wrapper">
    <div class="toast" :style="{ background: msgColor }">
      {{ msg ? "Success" : "Something when wrong..." }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

/////// msg = message for check true or false , true set toast to success, false set toast to fail
const props = defineProps({
  msg: Boolean,
});

const msgColor = ref("");

const checkMsg = () => {
  if (props.msg) {
    msgColor.value = "#499f45";
  } else {
    msgColor.value = "#ff3333";
  }
};

checkMsg();
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
