<template>
  <div v-if="items.length" class="border border-normal-border rounded-lg">
    <template v-if="type === 'link'">
      <component
        v-for="(item, index) in items"
        :is="item.link ? 'a' : 'span'"
        :key="index"
        :href="item.link"
        :class="getClasses(item, index)"
      >{{ item.label }}</component>
    </template>
    <template v-else-if="type === 'button'">
      <button
        v-for="(item, index) in items"
        :key="index"
        :class="getClasses(item, index)"
        :disabled="item.disabled"
        @click="onClick(index)"
      >{{ item.label }}</button>
    </template>
    <template v-else>
      <span
        v-for="(item, index) in items"
        :key="index"
        :class="getClasses(item, index)"
        :disabled="item.disabled"
      >{{ item.label }}</span>
    </template>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VListGroup',

  props: {
    items: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      validator: function (value) {
        const sizes = [
          'link',
          'button',
        ];
        return sizes.indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      getClasses(item, index) {
        let result = {
          'block w-full px-4 py-2 border-normal-border bg-normal-light': true,
          '--active': item.active && !item.disabled,
          '--disabled': item.disabled,
          'border-t': index >= 1,
          'rounded-t-lg': index === 0,
          'rounded-b-lg': index === props.items.length - 1,
        };
        if (props.type === 'link') {
          result = {
            ...result,
            'hover:bg-normal-light-hover': item.link,
          };
        }
        if (props.type === 'button') {
          result = {
            ...result,
            'hover:bg-normal-light-hover text-left': true,
          };
        }
        return result;
      },
      onClick(index) {
        emit('click', index);
      },
    };
  },
};
</script>

<style scoped>
/* アクティブ */
a.--active,
span.--active,
button.--active {
  @apply
    bg-normal
    text-white
    cursor-default;
}
/* 無効 */
a.--disabled,
span.--disabled,
button.--disabled {
  pointer-events: none;
  user-select: none;
  color: rgba(0, 0, 0, 0.3);
  opacity: 0.7;
}
</style>