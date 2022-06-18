<template>
  <nav class="pagination" :class="navClass">
    <!-- 前に戻るボタン -->
    <a
      v-if="currentNum > 1"
      class="pagination-previous"
      @click="onClickNavPrev"
      >Prev</a
    >
    <!-- 次に進むボタン -->
    <a
      v-if="currentNum < navTotal"
      class="pagination-next"
      @click="onClickNavNext"
      >Next</a
    >
    <!-- ページネーション -->
    <ul class="inline-flex -space-x-px">
      <!-- 最初に戻るボタン -->
      <template v-if="!showNums.includes(1)">
        <li>
          <a class="pagination-link" @click="onClickNav(1)">1</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
      </template>
      <!-- 表示ボタン -->
      <li v-for="(num, index) in showNums" :key="num">
        <a
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          :class="{
            'text-blue-600 bg-blue-50 border-gray-300 hover:bg-blue-100 hover:text-blue-700': num === currentNum,
            'rounded-l-lg': index === 0,
            'rounded-r-lg': index === showNums.length - 1,
          }"
          @click="onClickNav(num)"
          >{{ num }}</a
        >
      </li>
      <!-- 末尾に進むボタン -->
      <template v-if="!showNums.includes(navTotal)">
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link" @click="onClickNav(navTotal)">{{
            navTotal
          }}</a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'VPagination',

  props: {
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    currentNum: {
      type: Number,
      default: 1,
    },
    position: {
      type: String,
      default: 'left',
      validator: function (value) {
        const sizes = [
          'left',
          'center',
          'right',
        ];
        return sizes.indexOf(value) !== -1;
      },
    },
    rounded: {
      type: Boolean,
    },
  },

  emits: ['onClickNav', 'onClickNavPrev', 'onClickNavNext'],

  setup(props, { emit }) {
    props = reactive(props);

    const navTotal = computed(() => {
      return Math.ceil(props.total / props.perPage);
    });

    const showNums = computed(() => {
      if (props.currentNum === 1) {
        // 現在のナビゲーションが1の場合
        const items = [];
        for (let i = 0; i < navTotal.value; i++) {
          items.push(i + 1);
        }
        return items.slice(0, 3);
      } else if (props.currentNum === navTotal.value) {
        // 現在のナビゲーションが総数と同じ場合
        const items = [];
        for (let i = navTotal.value; i > 0; i--) {
          items.unshift(i);
        }
        return items.slice(-3);
      } else {
        return [props.currentNum - 1, props.currentNum, props.currentNum + 1];
      }
    });

    const navClass = computed(() => {
      return {
        'is-rounded': props.rounded,
      };
    });

    return {
      navTotal,
      showNums,
      navClass,
      onClickNav(num) {
        emit('onClickNav', num);
      },
      onClickNavPrev() {
        emit('onClickNavPrev');
      },
      onClickNavNext() {
        emit('onClickNavNext');
      },
    };
  }
}
</script>