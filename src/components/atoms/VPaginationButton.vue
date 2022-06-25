<template>
  <component
    :is="link ? 'a' : 'span'"
    :href="link || null"
    class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300"
    :class="classes"
  >
    {{ ellipsis ? '&hellip;' : label }}
  </component>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'VPaginationButton',

  props: {
    label: {
      type: [String, Number],
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
    current: {
      type: Boolean,
      default: false,
    },
    ellipsis: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: '',
      validator: function (value) {
        const positions = [
          'left',
          'right',
        ];
        return positions.indexOf(value) !== -1 || value === '';
      },
    },
  },

  setup(props) {
    const classes = computed(() => {
      const result = {
        'cursor-pointer hover:bg-gray-100 hover:text-gray-700': !props.ellipsis,
        'text-blue-600 bg-blue-50 border-gray-300 hover:bg-blue-100 hover:text-blue-700': props.current,
        'rounded-l-lg': props.position === 'left',
        'rounded-r-lg': props.position === 'right',
      };
      return result;
    });

    return {
      classes,
    };
  },
}
</script>