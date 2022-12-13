<template>
  <div class="cartoons-container">
    <transition name="preloader">
      <Preloader v-if="isLoading" />
    </transition>
    <div class="txt-cartoon">
      <h2>{{$t('update-delete.all-cartoon')}} {{ cartoons.length }}</h2>
    </div>

    <div class="cartoonList">
      <div
        class="cartoon-content"
        v-for="cartoon in cartoons"
        :key="cartoon.id"
      >
        <div class="cartoon">
          <div class="poster">
            <img
              :src="cartoon.image"
              onerror="src='/src/assets/cartoon.png'; title='image not found'"
              alt="Cartoon Poster"
              :title="cartoon.title"
            />
          </div>

          <div class="info">
            <span style="font-size: 1.3em">{{ cartoon.title }}</span>
            <div>
              <span>{{ cartoon.episodes }} {{$t('update-delete.ep')}}</span>
              <span class="dot"></span>
              <span>{{ cartoon.runtime_in_minutes }} {{$t('update-delete.mins')}}</span>
              <span class="dot"></span>
              <span>{{ cartoon.year }}</span>
            </div>
          </div>
        </div>

        <div class="icons">
          <router-link :to="{ name: 'update', params: { id: cartoon.id, title: cartoon.title }}"
            ><i class="material-icons md-24 green">edit</i></router-link
          >
          <i
            class="material-icons md-24 red"
            @click="toggleModal(cartoon.title, cartoon.id)"
            >delete</i
          >
        </div>
      </div>
    </div>
    
    <ModalDelete
      @close="toggleModal"
      :modalActive="modalActive"
      :ctnId="ctnId"
      @emitDelete="getEmitDelete"
    >
      <div class="modal-content">
        <h3>{{$t('update-delete.remove-cartoon')}}</h3>
        <p>
          {{$t('update-delete.do-u-want-to-remove')}} <b>{{ ctnTitle }}</b> ?
        </p>
      </div>
    </ModalDelete>

    <transition name="toast">
      <ToastNotification v-if="showToast" :msg="msgDelete" />
    </transition>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useCartoonStore } from "@/shared/stores/CartoonStore";
import { storeToRefs } from "pinia";

const Preloader = defineAsyncComponent(()=> import("@/components/modals/Preloader.vue"))
const ModalDelete = defineAsyncComponent(()=> import("@/components/modals/ModalDelete.vue"))
const ToastNotification = defineAsyncComponent(()=> import("@/components/modals/ToastNotification.vue"))

const modalActive = ref(false);
const ctnTitle = ref("");
const ctnId = ref();
const showToast = ref(false);
const msgDelete = ref(Boolean);

const cartoonStore = useCartoonStore();

cartoonStore.fetchCartoonsFB();

const { cartoons, isLoading } = storeToRefs(cartoonStore);

const toggleModal = (title, id) => {
  modalActive.value = !modalActive.value;
  ctnTitle.value = title;
  ctnId.value = id;
};

const getEmitDelete = (value) => {
  msgDelete.value = value;
  showToast.value = true;
  setTimeout(() => (showToast.value = false), 600);
};
</script>

<style scoped>

.material-icons.md-24 {
  font-size: 26px;
}
.material-icons.red {
  color: red;
}
.material-icons.green {
  color: green;
}
.cartoons-container {
  margin: 30px 120px;
}
.txt-cartoon h2 {
  padding: 0;
  margin: 0;
}
.cartoon-content {
  padding: 8px;
  height: 80px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  border-radius: 8px;
}
.poster {
  padding-right: 10px;
}
.poster img {
  width: 80px;
  height: 100%;
  border-radius: 6px;
}
.cartoon {
  display: flex;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.9em;
  font-weight: 600;
  margin: 5px;
}
.icons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;
}
.icons i {
  cursor: pointer;
}
.icons i:hover {
  box-shadow: rgba(5, 100, 26, 0.753) 0px 0px 0px 3px;
  background: #44a158;
  color: white;
  border-radius: 50%;
}
.dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #666;
  display: inline-block;
  margin: 3px 10px;
}
</style>
