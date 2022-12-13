<template>
  <div class="ctn-detail-container">

    <transition name="preloader">
      <Preloader v-if="isLoading" />
    </transition>

    <img
      class="ctn-image"
      :src="cartoonDetail.image"
      alt="Poster Image"
      onerror="src='/src/assets/cartoon.png'; title='image not found'"
    />

    <div class="ctn-detail">
      <div class="btn-watch-fav">
        <a class="watch">
          <i class="material-icons size-white color"> play_circle_filled</i>
          {{$t('detail.watch-now')}}</a
        >
        <a class="fav" @click="addFavorite(id, cartoonDetail.isFav)">
          <i class="material-icons size color-black"  :class="{active: cartoonDetail.isFav}" >favorite</i>
          {{$t('detail.add-to-fav')}}</a
        >
      </div>

      <div class="ctn-title">
        <h1>{{ cartoonDetail.title }}</h1>
      </div>

      <div class="ctn-rating">
        <a
          class="trailer"
          :href="'https://www.youtube.com/results?search_query='+cartoonDetail.title"
          target="_blank"
        >
          <i class="material-icons"> videocam </i> {{$t('detail.trailer')}}
        </a>
        <a class="quality">HD</a>
        <a class="rating">{{$t('detail.rating')}}: {{ cartoonDetail.rating }}</a>
      </div>

      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure
          molestiae, consequuntur laudantium ab aperiam optio aliquam numquam
          nisi eaque voluptatibus mollitia illum magni iusto!
        </p>
      </div>

      <div class="parent">
        <div class="info-left">
          <div class="episode">
            <b>{{$t('detail.ep')}}:</b> {{ cartoonDetail.episodes }}
          </div>
          <div class="release"><b>{{$t('detail.release')}}:</b> {{ cartoonDetail.year }}</div>
          <div class="genre">
            <b>{{$t('detail.genre')}}: </b>
            <span v-for="genre in cartoonDetail.genre"> {{ $t(`genre.${genre}`) }}, </span>
          </div>
        </div>
        <div class="info-right">
          <div class="duration">
            <b>{{$t('detail.duration')}}: </b> {{ cartoonDetail.runtime_in_minutes }} min
          </div>
          <div class="creator">
            <b>{{$t('detail.creator')}} : </b>
            <span v-for="creator in cartoonDetail.creator"
              >  {{ creator }}
            </span>
          </div>
        </div>
        <div class="spacer"></div>
      </div>
    </div>
    <transition name="toast">
      <ToastNotification v-if="showToast" :msg="msgFav" />
    </transition>
  </div>
</template>

<script setup>
import { useCartoonStore } from "@/shared/stores/CartoonStore";
import { storeToRefs } from "pinia";
import { ref, defineAsyncComponent } from "vue";
const Preloader = defineAsyncComponent(() => import("../modals/Preloader.vue"));
const ToastNotification = defineAsyncComponent(() => import("../modals/ToastNotification.vue"));


const props = defineProps({
  id: String,
});

const showToast = ref(false)
const msgFav = ref(false)

const cartoonStore = useCartoonStore();

// cartoonStore.fetchCartoonsFB(props.id);

cartoonStore.fetchCartoonsFB(props.id);

const { cartoonDetail, isLoading, updateMsg } = storeToRefs(cartoonStore);

const addFavorite = (id, isFav) => {
// cartoonStore.toggleFavorite(id, isFav).then((res) => {
//   if (res == "success") {
//       msgFav.value = true
//       showToast.value = true;
//       setTimeout(() => (showToast.value = false), 2500);
//     } else {
//       showToast.value = true;
//       setTimeout(() => (showToast.value = false), 2500);
//     }
// })
cartoonStore.toggleFavoriteFB(id, isFav).then((res) => {
  console.log('updateMsg::: '+updateMsg.value);
  if (updateMsg.value == "success") {
      msgFav.value = true
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 550);
    } else {
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 550);
    }
})
}

</script>

<style scoped>
.fav i.active{
  color: red;
  font-size: larger;
}
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}

.info-left {
  grid-area: 1 / 1 / 2 / 2;
}
.info-right {
  grid-area: 1 / 2 / 2 / 3;
}
.spacer {
  grid-area: 1 / 3 / 2 / 4;
}
.ctn-detail-container {
  margin: 20px;
  height: 450px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
}
.ctn-detail-container .ctn-image {
  /* background: rgb(107, 99, 99); */
  width: 320px;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
  border-radius: 15px;
}
.ctn-detail-container .ctn-detail {
  /* background: grey; */
  width: 100%;
  margin: 25px;
  padding: 0;
}
.btn-watch-fav {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
}
a {
  color: #fff;
  font-size: 1em;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 8px;
}
a.watch:hover {
  opacity: 0.8;
}
a.watch {
  background: #3e8afa;
}
a.fav {
  background: #e2e6ea;
  color: black;
}
.material-icons.size {
  font-size: 20px;
}
.material-icons.color-white {
  color: #fff;
}
.material-icons.color-black {
  color: black;
}
.material-icons {
  padding-right: 5px;
  text-decoration: none;
}
.ctn-detail .ctn-rating {
  widows: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.title h1 {
  color: #111111;
}
.trailer {
  width: 80px;
  height: 30px;
  color: #111111;
  border: 1px solid black;
  border-radius: 4px;
  justify-content: center;
  margin: 0 10px 0 0;
  padding: 2px;
  text-decoration: none;
}
.quality {
  color: #111111;
  font-weight: bold;
  width: 37px;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  justify-content: center;
  margin: 0 10px 0 0;
  padding: 2px;
}
.rating {
  color: #ffa600;
  font-weight: bold;
}
.desription p {
  font-size: 1em;
  color: #111111;
}
.genre p {
  margin: 0;
}

</style>
