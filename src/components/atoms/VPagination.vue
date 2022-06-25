<template>
  <nav :class="classes">
    <!-- ページネーション -->
    <ul class="inline-flex -space-x-px">
      <!-- 前に戻るボタン -->
      <li v-if="currentNum > 1">
        <v-pagination-button
          label="Prev"
          position="left"
          @click="onClickNavPrev"
        />
      </li>
      <!-- 最初のボタン -->
      <template v-if="!showNums.includes(1)">
        <li>
          <v-pagination-button
            label="1"
            @click="onClickNav(1)"
          />
        </li>
        <li>
          <v-pagination-button
            label="..."
            ellipsis
          />
        </li>
      </template>
      <!-- 表示ボタン -->
      <li v-for="(num, index) in showNums" :key="index">
        <v-pagination-button
          :label="num"
          :current="num === currentNum"
          :position="itemPosition(num)"
          @click="onClickNav(num)"
        />
      </li>
      <!-- 最後のボタン -->
      <template v-if="!showNums.includes(navTotal)">
        <li>
          <v-pagination-button
            label="..."
            ellipsis
          />
        </li>
        <li>
          <v-pagination-button
            :label="navTotal"
            @click="onClickNav(navTotal)"
          />
        </li>
      </template>
      <!-- 次に進むボタン -->
      <li v-if="currentNum < navTotal">
        <v-pagination-button
          label="Next"
          position="right"
          @click="onClickNavNext"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import { reactive, computed } from 'vue';
import VPaginationButton from './VPaginationButton';

export default {
  name: 'VPagination',

  components: {
    VPaginationButton,
  },

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

  emits: ['clickNav', 'clickNavPrev', 'clickNavNext'],

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

    const classes = computed(() => {
      return {
        'text-center': props.position === 'center',
        'text-right': props.position === 'right',
      };
    });

    const itemPosition = (num) => {
      if (num === 1 && props.currentNum === 1) {
        return 'left';
      } else if (num === navTotal.value && props.currentNum === navTotal.value) {
        return 'right';
      } else {
        return '';
      }
    };

    return {
      navTotal,
      showNums,
      classes,
      itemPosition,
      onClickNav(num) {
        emit('clickNav', num);
      },
      onClickNavPrev() {
        emit('clickNavPrev');
      },
      onClickNavNext() {
        emit('clickNavNext');
      },
    };
  }
}
</script>