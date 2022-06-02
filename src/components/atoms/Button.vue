<template>
  <button
    type="button"
    class="text-white px-5 py-3 focus:ring-4 font-medium rounded-lg text-sm focus:outline-none dark:focus:ring-blue-800"
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
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      classes: computed(() => {
        const result = {
          '--disabled': props.disabled,
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
button.--color-primary {
  @apply 
    bg-primary
    hover:bg-primary-hover
    focus:bg-primary-focus
    focus:ring-primary-ring;
}
</style>