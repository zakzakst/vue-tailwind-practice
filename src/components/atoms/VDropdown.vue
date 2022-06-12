<template>
  <div class="relative inline-block">
    <button
      type="button"
      class="bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none px-6 py-2 rounded border border-transparent transition inline-flex items-center"
      :class="{ 'ring-2 ring-gray-700': state.isShowItems }"
      @click="onClickButton"
    >
      {{ label }}
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-if="state.isShowItems && items.length"
      class="z-10 absolute bg-white rounded shadow w-44"
      :class="{
        'bottom-full left-0': position === 'top',
        'top-0 left-full': position === 'right',
        'top-full left-0': position === 'bottom',
        'top-0 right-full': position === 'left',
      }"
    >
      <ul class="py-1 text-sm divide-y divide-normal-border">
        <li v-for="(item, index) in items" :key="index" class="">
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
    position: {
      type: String,
      validator: function (value) {
        const sizes = [
          'top',
          'right',
          'bottom',
          'left',
        ];
        return sizes.indexOf(value) !== -1;
      },
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
