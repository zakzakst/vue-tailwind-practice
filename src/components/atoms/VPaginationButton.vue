<template>
  <component :is="link ? 'a' : 'span'" :href="link || null">
    {{ label }}
  </component>
</template>

<script>
// import { reactive, computed } from 'vue';

export default {
  name: 'VPaginationButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>