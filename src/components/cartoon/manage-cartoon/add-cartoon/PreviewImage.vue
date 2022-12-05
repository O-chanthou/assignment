<template>
  <div>
    <div class="btn-choose-img">
      <input ref="fileInput" type="file" @input="pickFile" />
    </div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': previewImage == null ? `url(${image})` : `url(${previewImage})`}"
      @click="selectImage"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['image'],
  data() {
    return {
      previewImage: null,
    };
  },

  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        console.log(file[0]);
        this.$emit('emitImage', this.file[0])
      }
    },
  },
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
  cursor: pointer;
  margin: 0 0 30px 0;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  border: 1px solid;
}
</style>
