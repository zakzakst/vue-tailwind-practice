<template>
  <div class="relative">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <input
      v-model="state.searchText"
      type="search"
      class="block p-4 pl-10 pr-28 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      :placeholder="placeholder"
    >
    <div class="flex items-center absolute inset-y-0 right-1.5 m-auto">
      <v-button
        label="Search"
        color="primary"
        @click="onClickSearch"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import VButton from '../atoms/VButton';

export default {
  name: 'VSearchInput',

  components: {
    VButton,
  },

  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },

  emits: ['search'],

  setup(props, { emit }) {
    const state = reactive({
      searchText: '',
    });

    const onClickSearch = () => {
      emit('search', state.searchText);
    };

    return {
      state,
      onClickSearch,
    };
  },
}
</script>