<template>
  <div>
    <div class="btn-choose-img">
      <input
        id="uploadPicture"
        ref="fileInput"
        type="file"
        @input="chooseFile"
      />
    </div>
    <div
      class="imagePreviewWrapper"
      :style="{
        'background-image':
          previewImage == null ? `url(${propImage})` : `url(${previewImage})`,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  propImage: String,
});

const previewImage = ref(null);
const reader = new FileReader();
const imageObj = reactive({
  fileName: "",
  imageBase64: "",
});
const emit = defineEmits(["emitImage"]);

const chooseFile = () => {
  let file = document.getElementById("uploadPicture").files[0];

  if (event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
  }

  reader.onload = async (event) => {
    previewImage.value = event.target.result;
    imageObj.imageBase64 = previewImage.value;
    imageObj.fileName = file["name"];

    /// event emit imageObj to page AddCartoon.vue
    emit("emitImage", imageObj);
  };
};
</script>

<style>
.btn-choose-img {
  width: 100%;
  border: 1px solid #111;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}
.btn-choose-img input {
  color: #111;
  padding: 8px;
}
.imagePreviewWrapper {
  width: 100%;
  height: 400px;
  display: block;
  margin: 0 0 30px 0;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  border: 1px solid;
}
</style>
