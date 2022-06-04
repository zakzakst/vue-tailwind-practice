<template>
  <transition name="v-fade">
    <div v-if="show" class="fixed inset-0 flex justify-center items-center p-16">
      <div class="modal__content overflow-hidden z-10 flex flex-col max-w-screen-md max-h-full bg-white rounded-lg shadow-lg">
        <div v-if="title" class="px-4 py-2 border-b text-lg font-bold">{{ title }}</div>
        <div class="overflow-auto p-4">
          <slot />
        </div>
        <div v-if="$slots.footer" class="p-4 py-2 border-t">
          <slot name="footer" />
        </div>
      </div>
      <button
        type="button"
        class="absolute z-20 top-4 right-4 w-4 h-4 flex justify-center items-center fill-white hover:fill-gray-400 transition"
        aria-label="閉じる"
        @click="onClickClose"
      >
        <svg
          width="16"
          height="16"
          class="w-full h-full"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
      <div class="absolute inset-0 bg-black bg-opacity-50" @click="onClickBg" />
    </div>
  </transition>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VModal',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },

  emits: [
    'clickClose',
    'clickBg',
  ],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      onClickClose() {
        emit('clickClose');
      },
      onClickBg() {
        emit('clickBg');
      },
    };
  },
};
</script>

<style scoped>
.v-fade-enter-active .modal__content,
.v-fade-leave-active .modal__content {
  @apply transition;
}
.v-fade-enter .modal__content,
.v-fade-leave-to .modal__content,
.v-fade-leave-active .modal__content {
  @apply translate-y-4;
}
</style>