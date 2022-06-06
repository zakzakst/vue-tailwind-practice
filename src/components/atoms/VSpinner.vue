<template>
  <span class="animate-spin inline-block w-6 h-6 border-2 border-t-normal-border border-l-normal-border border-r-normal-border rounded-full" :class="classes">
    <span class="sr-only">{{ label }}</span>
  </span>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'VSpinner',

  props: {
    label: {
      type: String,
      default: 'Loading...',
    },
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
    size: {
      type: String,
      validator: function (value) {
        const sizes = [
          'small',
          'large',
        ];
        return sizes.indexOf(value) !== -1;
      },
    },
  },

  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => {
        const result = {};
        if (props.color) {
          result[`--color-${props.color}`] = true;
        }
        if (props.size) {
          result[`--size-${props.size}`] = true;
        }
        return result;
      }),
    };
  },
};
</script>

<style scoped>
/* 色 */
span.--color-primary {
  @apply
    border-t-primary
    border-l-primary
    border-r-primary;
}
span.--color-secondary {
  @apply
    border-t-secondary
    border-l-secondary
    border-r-secondary;
}
span.--color-success {
  @apply
    border-t-success
    border-l-success
    border-r-success;
}
span.--color-danger {
  @apply
    border-t-danger
    border-l-danger
    border-r-danger;
}
span.--color-warning {
  @apply
    border-t-warning
    border-l-warning
    border-r-warning;
}
span.--color-info {
  @apply
    border-t-info
    border-l-info
    border-r-info;
}

/* サイズ */
span.--size-small {
  @apply
    w-4
    h-4;
}
span.--size-large {
  @apply
    w-8
    h-8
    border-4;
}
</style>