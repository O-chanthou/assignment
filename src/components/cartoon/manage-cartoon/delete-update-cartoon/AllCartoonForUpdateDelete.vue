<template>
  <div class="cartoons-container">
    <div class="txt-cartoon">
      <h2>All Cartoon : {{ cartoons.length }}</h2>
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
              <span>{{ cartoon.episodes }} ep</span>
              <span class="dot"></span>
              <span>{{ cartoon.runtime_in_minutes }}mins</span>
              <span class="dot"></span>
              <span>{{ cartoon.year }}</span>
            </div>
          </div>
        </div>

        <div class="icons">
          <i class="material-icons md-24 green">edit</i>
          <i
            class="material-icons md-24 red"
            @click="toggleModal(cartoon.title, cartoon.id)"
            >delete</i
          >
        </div>
      </div>
    </div>
    <ModalDelete @close="toggleModal" :modalActive="modalActive" :ctnId="ctnId" @emitDelete="getEmitDelete">
      <div class="modal-content">
        <h3>Remove Cartoon</h3>
        <p>
          Do you want to remove <b>{{ ctnTitle }}</b> ?
        </p>
      </div>
    </ModalDelete>
    <transition name="toast">
      <ToastNotification v-if="showToast" :msgDelete="msgDelete"/>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartoonStore } from "@/shared/stores/CartoonStore";
import { storeToRefs } from "pinia";
import ModalDelete from "@/components/modals/ModalDelete.vue";
import ToastNotification from '@/components/modals/ToastNotification.vue'

const modalActive = ref(false);
const ctnTitle = ref("");
const ctnId = ref();
const showToast = ref(false)
const msgDelete = ref(Boolean)

const cartoonStore = useCartoonStore();
cartoonStore.fetchCartoons();
const { cartoons } = storeToRefs(cartoonStore);

const toggleModal = (title, id) => {
  modalActive.value = !modalActive.value;
  ctnTitle.value = title;
  ctnId.value = id;
};

const getEmitDelete = (value) => {
  msgDelete.value = value
  showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
}
</script>

<style scoped>
/* enter transitions */
.toast-enter-from {
    opacity: 0;
    transform: translateX(220px);
  }
  .toast-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
  .toast-enter-active {
    transition: all 0.3s ease;
  }
  /* leave transitions */
  .toast-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .toast-leave-to {
    opacity: 0;
    transform: translateX(120px);
  }
  .toast-leave-active {
    transition: all 0.3s ease;
  }
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
