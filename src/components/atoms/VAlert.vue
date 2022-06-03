<template>
  <div class="bg-gray-100 px-6 py-4 rounded border border-gray-700" :class="classes">
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="absolute top-4 right-4 w-6 h-6 bg-black"
      aria-label="Close"
    />
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'VAlert',

  props: {
    color: {
      type: String,
      validator: function (value) {
        const colors = [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ];
        return colors.indexOf(value) !== -1;
      },
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => {
        const result = {
          'relative pr-12': props.dismissible,
        };
        if (props.color) {
          result[`--color-${props.color}`] = true;
        }
        return result;
      }),
    };
  },
};
</script>

<style scoped>
/* 色 */
div.--color-primary {
  @apply
    bg-primary-light
    border-primary-border;
}
div.--color-secondary {
  @apply
    bg-secondary-light
    border-secondary-border;
}
div.--color-success {
  @apply
    bg-success-light
    border-success-border;
}
div.--color-danger {
  @apply
    bg-danger-light
    border-danger-border;
}
div.--color-warning {
  @apply
    bg-warning-light
    border-warning-border;
}
div.--color-info {
  @apply
    bg-info-light
    border-info-border;
}
</style>
