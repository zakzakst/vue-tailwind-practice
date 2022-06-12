<template>
  <button
    type="button"
    class="bg-white rounded-lg hover:bg-gray-100 inline-flex h-8 w-8 p-2"
    @click="onClick()"
  >
    <span class="sr-only">Close</span>
    <svg width="16" height="16" class="w-full" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
    </svg>
  </button>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VClose',

  props: {},

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      onClick() {
        emit('click');
      },
    };
  },
};
</script>