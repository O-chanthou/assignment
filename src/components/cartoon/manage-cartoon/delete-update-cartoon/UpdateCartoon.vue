<template>
  <form @submit.prevent="getInputFormData">
    <div class="add-ctn-container">

      <transition name="preloader">
        <Preloader v-if="isLoading" />
      </transition>

      <div class="form-input">
        <label>{{$t('create.title')}}:</label>
        <input type="text" :placeholder="$t('create.title')" required v-model="form.title" />

        <label>{{$t('create.year')}}:</label>
        <input
          type="number"
          min="0"
          :placeholder="$t('create.year')"
          required
          v-model="form.year"
        />

        <label>{{$t('create.creator')}}:</label>
        <input
          type="text"
          :placeholder="$t('create.creator')"
          v-model="creator"
          @keyup.alt="addCreator"
        />

        <div class="tip">
          <p>{{$t('create.add-click')}} <b>Alt</b> + <b>,</b> {{$t('create.and-remove-click-value')}}</p>
        </div>
        <div
          v-for="creator in form.creatorList"
          :key="creator"
          class="creator"
          @click="removeCreator(i)"
        >
          {{ creator }}
        </div>
        <br />

        <label>{{$t('create.rating')}}:</label>
        <input type="text" :placeholder="$t('create.rating')" v-model="form.rating" />

        <label>{{$t('create.genre')}}:</label>
        <div
          class="genre"
          v-for="genre in allGenreList"
          :key="genre.id"
          :class="{ active: genre.isSelect }"
          @click="addGenre(genre.name)"
        >
          {{ $t(`genre.${genre.name}`) }}
        </div>
        <br />

        <label>{{$t('create.runtime')}}:</label>
        <input
          type="number"
          :placeholder="$t('create.runtime-min')"
          required
          v-model="form.runtime"
        />

        <label>{{$t('create.ep')}}:</label>
        <input
          type="number"
          :placeholder="$t('create.ep')"
          required
          v-model="form.episode"
        />
      </div>

      <div class="form-img-submit">
        <div class="choose-img">
          <PreviewImage @emitImage="" :image="form.image" />
        </div>
        <div class="btn-submit-form-ctn">
          <button>{{$t('update-delete.update-cartoon')}}</button>
        </div>
      </div>
    </div>

    <transition name="toast">
      <ToastNotification v-if="showToast" :msg="isUpdate" />
    </transition>
  </form>
</template>

<script setup>

import { allGenreList } from "@/shared/utils/all-genre-type";
import { ref, onMounted, watchEffect, computed, watch, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import router from "@/router";
import { useCartoonStore } from "@/shared/stores/CartoonStore";

const Preloader = defineAsyncComponent(() => import("@/components/modals/Preloader.vue"))
const ToastNotification = defineAsyncComponent(() => import("@/components/modals/ToastNotification.vue"))
const PreviewImage = defineAsyncComponent(() => import("../add-cartoon/PreviewImage.vue"))

const creator = ref("");
const showToast = ref(false);
const isUpdate = ref(false)

const props = defineProps({
  id: String,
});

//// start store
const cartoonStore = useCartoonStore();

cartoonStore.fetchCartoonsFB(props.id).then((res) => {
  if (res == "loaded") {
    checkValueGenre();
  }
});

const { cartoonDetail, isLoading, updateMsg } = storeToRefs(cartoonStore);
//// end store

const form = ref({
  title: "",
  year: "",
  creatorList: [],
  rating: "",
  genreType: "",
  runtime: "",
  episode: "",
  image: "",
});

watchEffect(() => {
  (form.value.title = cartoonDetail.value.title),
  (form.value.year = cartoonDetail.value.year),
  (form.value.creatorList = cartoonDetail.value.creator),
  (form.value.rating = cartoonDetail.value.rating),
  (form.value.genreType = cartoonDetail.value.genre),
  (form.value.runtime = cartoonDetail.value.runtime_in_minutes),
  (form.value.episode = cartoonDetail.value.episodes),
  (form.value.image = cartoonDetail.value.image);
});

//// set allGenereList to default value , isSelect to false
onUnmounted(() => {
  const arr1 = allGenreList.value;
  const arr2 = form.value.genreType;
  arr2?.map((name) => (arr1.find((x) => x.name == name).isSelect = false));
});

//// check Genre value and set isSelect to true
const checkValueGenre = () => {
  const arr1 = allGenreList.value;
  const arr2 = form.value.genreType;
  return arr2?.map(
    (name) => (arr1.find((x) => x.name == name).isSelect = true)
  );
};

//// add creator to creatorList
const addCreator = (e) => {
  if (e.key === "," && creator.value) {
    if (!form.value.creatorList.includes(creator.value)) {
      form.value.creatorList.push(creator.value);
    }
    creator.value = "";
  }
};

const removeCreator = (index) => {
  form.value.creatorList.splice(index, 1);
  console.log(form.value.creatorList);
};

//// Add Genre to List
const addGenre = (value) => {
  //// add genre to new genre list
  if (!form.value.genreType.includes(value)) {
    form.value.genreType.push(value);
    setIsSelect(value);
  } else {
    //// remove genre from new genre lst
    form.value.genreType.forEach((genre, index) => {
      if (genre == value) {
        form.value.genreType.splice(index, 1);
        setIsSelect(value);
      }
    });
  }
  console.log(form.value.genreType);
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
const getInputFormData = () => {
  isLoading.value = true
  const data = form.value;

  const cartoon = {
    title: data.title,
    year: data.year,
    creator: data.creatorList,
    rating: data.rating,
    genre: data.genreType,
    runtime: data.runtime,
    episode: data.episode,
    image: data.image,
    isFav: cartoonDetail.value.isFav
  };

  cartoonStore.updateCartoonFB(props.id, cartoon).then((res) => {
    console.log('updateMsg:  '+updateMsg.value );
  
    if (updateMsg.value === "success") {
      isUpdate.value = true
      showToast.value = true;
      isLoading.value = false
      setTimeout(() => (showToast.value = false), 550);
      setTimeout(() => router.go(-1), 600)
    } else {
      isLoading.value = false
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 550);
    }
  });
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
