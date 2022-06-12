<template>
  <div
    v-if="items.length"
    class="fixed w-80"
    :class="{
      'right-4': positionX === 'right',
      'left-4': positionX === 'left',
      'inset-x-0 mx-auto': positionX === 'center',
      'top-4': positionY === 'top',
      'bottom-4': positionY === 'bottom',
      'inset-y-0 my-auto': positionY === 'center',
    }"
  >
    <transition-group name="v-fade">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="toast flex items-center w-full p-2 bg-white rounded-lg shadow"
      >
        <div class="ml-3 text-sm font-normal">{{ item.message }}</div>
        <v-close class="ml-auto" @click="onClickClose(index)" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import { reactive } from 'vue';
import VClose from './VClose';

export default {
  name: 'VToast',

  components: {
    VClose,
  },

  props: {
    items: {
      type: Array,
      default: [],
    },
    positionX: {
      type: String,
      default: 'right',
      validator: function (value) {
        const sizes = [
          'left',
          'center',
          'right',
        ];
        return sizes.indexOf(value) !== -1;
      },
    },
    positionY: {
      type: String,
      default: 'top',
      validator: function (value) {
        const sizes = [
          'top',
          'center',
          'bottom',
        ];
        return sizes.indexOf(value) !== -1;
      },
    },
  },

  emits: ['close'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      onClickClose(index) {
        emit('close', index);
      },
    };
  },
};
</script>

<style scoped>
.toast + .toast {
  @apply mt-2;
}
</style>