<template>
  <div class="field-A">
    <input id="uploadPicture" ref="fileInput" type="file" @input="chooseFile" />

    <button @click="getFile">getDownloadURL</button>
  </div>
  <div
    class="imagePreviewWrapper"
    :style="{ 'background-image': previewImage }"
  ></div>
</template>

<script setup>
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../../shared/services/Firebase/firebase-config";
const imagesRef = ref(storage, "cartoons/");
let fileName = "";

const reader = new FileReader();
let previewImage = "";

const chooseFile = () => {
  let file = document.getElementById("uploadPicture").files[0];
  fileName = file["name"];

  reader.onload = async (event) => {
    // previewImage = event.target.result
    document
      .getElementById("uploadPicture")
      .setAttribute("src", event.target.result);
    uploadPicture(event.target.result);
  };
  if (event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
  }
};

const uploadPicture = (message4) => {
  const storageRef = ref(imagesRef, fileName);

  uploadString(storageRef, message4, "data_url").then((snapshot) => {
    console.log("Uploaded a data_url string!");

    getDownloadURL(ref(storage, storageRef.fullPath)).then((url) => {
      console.log(url);
    });
  });
};

</script>

<style scoped>
.field-A {
  margin: 30px;
}
.imagePreviewWrapper {
  width: 200px;
  height: 200px;
  margin: 0 0 30px 0;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  border: 1px solid;
}
</style>
