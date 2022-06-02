<template>
  <button
    type="button"
    class="bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700 px-6 py-2 rounded border border-transparent transition"
    :class="classes"
    @click="onClick"
  >{{ label }}</button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
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
    disabled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      classes: computed(() => {
        const result = {
          '--disabled': props.disabled,
          '--outlined': props.outlined,
          'rounded-full': props.rounded,
        };
        if (props.color) {
          result[`--color-${props.color}`] = true;
        }
        if (props.size) {
          result[`--size-${props.size}`] = true;
        }
        return result;
      }),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>

<style scoped>
/* 色 */
button.--color-primary {
  @apply
    text-white
    bg-primary
    hover:bg-primary-hover
    focus:bg-primary-focus
    focus:ring-primary-ring;
}
button.--color-secondary {
  @apply
    text-white
    bg-secondary
    hover:bg-secondary-hover
    focus:bg-secondary-focus
    focus:ring-secondary-ring;
}
button.--color-success {
  @apply
    text-white
    bg-success
    hover:bg-success-hover
    focus:bg-success-focus
    focus:ring-success-ring;
}
button.--color-danger {
  @apply
    text-white
    bg-danger
    hover:bg-danger-hover
    focus:bg-danger-focus
    focus:ring-danger-ring;
}
button.--color-warning {
  @apply
    text-white
    bg-warning
    hover:bg-warning-hover
    focus:bg-warning-focus
    focus:ring-warning-ring;
}
button.--color-info {
  @apply
    text-white
    bg-info
    hover:bg-info-hover
    focus:bg-info-focus
    focus:ring-info-ring;
}

/* アウトライン */
button.--outlined {
  @apply
    text-black
    border-gray-700;
}
button.--outlined.--color-primary {
  @apply
    bg-primary-light
    hover:bg-primary-light-hover
    focus:bg-primary-light-focus
    border-primary-border;
}

/* サイズ */
button.--size-small {
  @apply
    px-4
    py-2
    text-sm;
}
button.--size-large {
  @apply
    px-8
    py-2
    text-lg;
}
</style>