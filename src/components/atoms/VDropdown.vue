<template>
  <div>
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      type="button"
      @click="onClickButton"
    >
      {{ label }}
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-if="state.isShowItems && items.length"
      class="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44"
    >
      <ul class="py-1 text-sm text-gray-700">
        <li v-for="(item, index) in items" :key="index">
          <button class="block w-full px-4 py-2 hover:bg-gray-100" @click="onClickItem(item)">{{ item.label }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VDropdown',

  props: {
    label: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },

  emits: ['clickItem'],

  setup(props, { emit }) {
    props = reactive(props);
    const state = reactive({
      isShowItems: true,
    });

    return {
      state,
      onClickButton() {
        state.isShowItems = !state.isShowItems;
      },
      onClickItem(item) {
        emit('clickItem', item);
      },
    };
  },
};
</script>
