<template>
  <div v-if="items.length">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center w-full max-w-xs p-2 bg-white rounded-lg shadow"
    >
      <div class="ml-3 text-sm font-normal">{{ item.message }}</div>
      <button
        type="button"
        class="ml-auto bg-white rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
        @click="onClickClose(index)"
      >
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VToast',

  props: {
    items: {
      type: Array,
      default: [],
    },
    position: {
      type: String,
      validator: function (value) {
        const sizes = [
          'center',
          'right',
        ];
        return sizes.indexOf(value) !== -1;
      },
    },
  },

  emits: ['close'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      onClickClose(index) {
        emit('close', index);
      },
    };
  },
};
</script>