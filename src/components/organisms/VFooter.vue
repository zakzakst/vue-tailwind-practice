<template>
  <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
    <span class="text-sm text-gray-500 sm:text-center">© {{ year }} xxxxx. All Rights Reserved.</span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
      <li v-for="(link, index) in state.links" :key="index">
        <a
          :href="link.link"
          class="hover:underline "
          :class="{'mr-4 md:mr-6': index !== state.links.length - 1}"
        >{{ link.label }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'VFooter',

  setup() {
    const state = reactive({
      links: [
        { link: '#', label: 'About' },
        { link: '#', label: 'Privacy Policy' },
        { link: '#', label: 'Licensing' },
        { link: '#', label: 'Contact' },
      ],
    });

    const year = computed(() => {
      const date = new Date();
      return date.getFullYear();
    });

    return {
      state,
      year,
    };
  },
}
</script>