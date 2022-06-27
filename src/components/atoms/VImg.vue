<template>
  <div class="relative flex items-center justify-center overflow-hidden bg-gray-100" :class="classes" :style="styles">
    <p v-if="state.error" class="p-1 text-center text-xs">画像の取得に失敗しました</p>
    <img
      v-else
      :src="src"
      :alt="alt"
      :class="imgClasses"
      @load="onLoad"
      @error="onError"
    >
    <transition name="v-fade">
      <div v-if="skeleton && !state.loaded" class="skelton absolute z-10 inset-0"></div>
    </transition>
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
    skeleton: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['load', 'error'],

  setup(props, { emit }) {
    const loadLimit = 10000;

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
      state.loaded = true;
      emit('load');
    };

    const onError = (error) => {
      state.loaded = true;
      state.error = true;
      emit('error', error);
    };

    // ロード限度時間を過ぎても画像ロードが完了していない場合、エラー処理
    setTimeout(() => {
      if (!state.loaded) {
        onError('load limit');
      }
    }, loadLimit);

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