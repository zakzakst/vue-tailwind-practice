<template>
  <!-- <button type="button" class="text-3xl font-bold underline bg-primary" :class="classes" @click="onClick" :style="style">{{ label }}</button> -->
  <button type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm focus:outline-none dark:focus:ring-blue-800" :class="classes">{{ label }}</button>
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
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
      default: null,
      validator: function (value) {
        return ['blue', 'green', 'red'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      // classes: computed(() => ({
      //   // 'storybook-button': true,
      //   // 'storybook-button--primary': props.primary,
      //   // 'storybook-button--secondary': !props.primary,
      //   // [`storybook-button--${props.size || 'medium'}`]: true,
      // })),
      classes: computed(() => {
        const result = {
          'storybook-button': true,
        };
        if (props.backgroundColor) {
          // result[`bg-${props.backgroundColor}-700`] = true;
          result[`bg-green-700`] = true;
        } else {
          result['bg-primary'] = true;
        }
        return result;
      }),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3;
}
</style>