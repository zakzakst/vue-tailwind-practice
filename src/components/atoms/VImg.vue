<template>
  <div class="overflow-hidden bg-gray-100" :class="classes" :style="styles">
    <img
      :src="src"
      :alt="alt"
      :class="imgClasses"
      @load="onLoad"
      @error="onError"
    >
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'VImg',

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: null,
    },
    maxWidth: {
      type: Number,
      default: null,
    },
    aspectRatio: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    cover: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const state = reactive({
      error: false,
      loaded: false,
    });

    const classes = computed(() => {
      const result = {
        'rounded-lg': props.rounded,
      };
      return result;
    });

    const styles = computed(() => {
      const result = {};
      if (props.height) {
        result.height = `${props.height}px`;
      }
      if (props.maxWidth) {
        result.maxWidth = `${props.maxWidth}px`;
      }
      if (props.aspectRatio) {
        result.aspectRatio = props.aspectRatio;
      }
      return result;
    });

    const imgClasses = computed(() => {
      const result = {
        'w-full h-full object-center': true,
        'object-contain': !props.cover,
        'object-cover': props.cover,
      };
      return result;
    });

    const onLoad = () => {
      console.log('load');
    };

    const onError = () => {
      console.log('error');
    };

    return {
      state,
      classes,
      styles,
      imgClasses,
      onLoad,
      onError,
    };
  },
}
</script>