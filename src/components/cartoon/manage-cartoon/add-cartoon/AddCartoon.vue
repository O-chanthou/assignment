<template>
  <form @submit.prevent="getInputFormData">
    <div class="add-ctn-container">
      <div class="form-input">
        <label>Title:</label>
        <input type="text" placeholder="Title" required v-model="title" />

       <label>Year:</label>
        <input
          type="number"
          min="0"
          placeholder="Year"
          required
          v-model="year"
        />  

        <label>Creator:</label>
        <input type="text" placeholder="Creator" v-model="creator" @keyup.alt="addCreator" />
        <div class="tip">
          <p>Add click <b>Alt</b> + <b>,</b> and Romove click on value</p>
        </div>
        <div
          v-for="(creator) in creatorList"
          :key="creator"
          class="creator"
          @click="removeCreator(i)"
        >
          {{ creator }}
        </div>
        <br>

        <label>Rating:</label>
        <input type="text" placeholder="Rating" v-model="rating" />

        <label>Genre:</label>
        <div
          class="genre"
          v-for="genre in allGenreList"
          :key="genre.id"
          :class="{ active: genre.isSelect }"
          @click="addGenre(genre.name)"
        >
          {{ genre.name }}
        </div>
        <br />

        <label>Runtime:</label>
        <input
          type="number"
          placeholder="Runtime in minute"
          required
          v-model="runtime"
        />

        <label>Episode:</label>
        <input type="number" placeholder="Episode" required v-model="episode" />

      </div>

      <div class="form-img-submit">
        <div class="choose-img">
          <PreviewImage @emitImage="imageData" />
        </div>
        <div class="btn-submit-form-ctn">
          <button>Add Cartoon</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useCartoonStore } from "@/stores/CartoonStore";
import PreviewImage from "./PreviewImage.vue";
import { allGenreList } from "/data/all-genre-type";
import { ref } from "vue";

const title = ref('')
const year = ref(null)
const creator = ref('')
const creatorList = ref([]) 
const rating = ref(null)
const genreType = []
const runtime = ref(null)
const episode = ref(null)
const image = ref('')


const cartoonStore = useCartoonStore()

//// add creator to creatorList 
const addCreator = (e) => {
  if (e.key === "," && creator.value) {
        if (!creatorList.value.includes(creator.value)) {
          creatorList.value.push(creator.value);
        }
        creator.value = "";
      }
}

const removeCreator = (index) => {
  creatorList.value.splice(index, 1)
}

//// Add Genre to List
const addGenre = (value) => {
  //// add genre to new genre list
  if (!genreType.includes(value)) {
    genreType.push(value);
    setIsSelect(value);
  } else {
    //// remove genre from new genre lst
    genreType.forEach((genre, index) => {
      if (genre == value) {
        genreType.splice(index, 1);
        setIsSelect(value);
      }
    });
  }
  console.log(genreType);
};

//// set new data(boolean) for allGenreList.isSelect
const setIsSelect = (value) => {
  allGenreList.value.forEach((item) => {
    if (item.name == value) {
      item.isSelect = !item.isSelect;
    }
  });
};

// const uploadImageToFireBase = () => { 
//   getInputFormData
// }

//// push data from form in to cartoon object
const getInputFormData = (image) => {

  const cartoonModel =  {
  title: title.value,
  year: year.value,
  creator: creatorList.value,
  rating: rating.value,
  genre: genreType,
  runtime_in_minutes: runtime.value,
  episodes: episode.value,
  image: '',
  id: Math.floor(Math.random() * 10000000),
}

cartoonStore.createCartoon(cartoonModel)

};
</script>

<style scoped>
.tip p {
  margin: 0 0 5px 10px;
  color: #777;
  font-size: 0.8em;
}
.creator {
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.add-ctn-container {
  margin: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
}
.form-input {
  /* background: grey; */
  width: 70%;
  margin: 25px;
  padding: 0;
}
label {
  color: #111111;
  display: inline-block;
  margin: 0;
  padding-right: 8px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border: 2px solid #ddd;
  color: #111111;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin-bottom: 10px;
}
.genre {
  display: inline-block;
  margin: 2px 10px 10px 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #555;
  cursor: pointer;
}
.genre:hover {
  /* background: #44a158; */
  background: #9df1af;
  color: #111111;
}
.genre.active {
  background: #44a158;
  color: white;
}
.form-img-submit {
  /* background: rgb(107, 99, 99); */
  width: 25%;
  margin-top: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  border-radius: 15px;
}
.btn-submit-form-ctn {
  text-align: start;
  padding: 15px;
}
.btn-submit-form-ctn button {
  background: #44a158;
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  padding: 5px;
  border-radius: 8px;
  border: 2px solid #44a158;
  cursor: pointer;
}
.btn-submit-form-ctn button:hover {
  background: #a8f0b7;
  color: #111111;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.5);
}
</style>
