<template>
  <div v-if="items.length" class="text-sm text-center text-gray-500 border-b border-gray-200">
    <ul
      class="overflow-auto flex flex-nowrap -mb-px"
      :class="{'justify-center': position === 'center', 'justify-end': position === 'right'}"
    >
      <li v-for="(item, index) in items" :key="index" class="mr-2">
        <button
          type="button"
          class="inline-block p-4 border-b-2 border-transparent hover:text-primary hover:border-primary transition cursor-pointer"
          :class="{'--active': item.active && !item.disabled}"
          :disabled="item.disabled"
          @click="onClick(index)"
        >{{ item.label }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VTabs',

  props: {
    items: {
      type: Array,
      required: true,
    },
    position: {
      type: String,
      validator: function (value) {
        const sizes = [
          'center',
          'right',
        ];
        return sizes.indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      onClick(index) {
        emit('click', index);
      },
    };
  },
};
</script>

<style scoped>
/* アクティブ */
button.--active {
  @apply
    text-primary
    border-primary
    cursor-default;
}
/* 無効 */
button:disabled {
  pointer-events: none;
  user-select: none;
  color: rgba(0, 0, 0, 0.3);
  opacity: 0.7;
}
</style>
