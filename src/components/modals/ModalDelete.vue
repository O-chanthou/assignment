<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i class="material-icons size" @click="btnCloseModal"
            >highlight_off</i
          >
          <!-- Modal Content -->
          <slot> </slot>
          <div class="btn-yes-no">
            <button
              @click="btnCloseModal"
              style="background: #5cb85c"
              type="button"
            >
            {{$t('update-delete.no')}}
            </button>
            <button
              @click="btnDeleteCartoon(props.ctnId)"
              style="background: crimson"
              type="button"
            >
            {{$t('update-delete.yes')}}
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { useCartoonStore } from "@/shared/stores/CartoonStore";

const props = defineProps({
  modalActive: Boolean,
  ctnId: Number,
});

const btnCloseModal = () => {
  emit("close");
};

const emit = defineEmits(["close", "emitDelete"]);

const cartoonStore = useCartoonStore();

const btnDeleteCartoon = (id) => {
  cartoonStore.deleteCartoon(id).then((res) => {
    if (res == true) {
        btnCloseModal()
        emit("emitDelete", res)
    } else {
        btnCloseModal()
    }
  });
};
</script>

<style scoped>
.material-icons.size {
  font-size: 36px;
}
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-inner {
  position: relative;
  max-width: 640px;
  width: 35%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  padding: 20px 16px;
  border-radius: 8px;
}
.modal-inner i {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}
.modal-inner i:hover {
  color: crimson;
}
.modal-inner .btn-yes-no {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}
.modal-inner button {
  padding: 5px 15px;
  border: none;
  font-size: 16px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
.modal-inner button:hover {
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
</style>
