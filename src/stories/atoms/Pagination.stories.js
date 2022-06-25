import VPagination from '../../components/atoms/VPagination';

export default {
  title: 'Atoms/Pagination',
  component: VPagination,
  argTypes: {
    // 総数フィールド
    items: {
      name: '総数',
      description: '総数のデータ',
      control: {
        type: 'number',
        min: 1,
        step: 1,
      },
    },
    // 1ページあたりの項目数フィールド
    perPage: {
      name: '1ページあたりの項目数',
      description: '1ページあたりの項目数のデータ',
      defaultValue: 10,
      control: {
        type: 'number',
        min: 1,
        step: 1,
      },
    },
    // 現在のページフィールド
    currentNum: {
      name: '現在のページ',
      description: '現在のページのデータ',
      defaultValue: 1,
      control: {
        type: 'number',
        min: 1,
        step: 1,
      },
    },
    // 位置フィールド
    position: {
      name: '位置',
      description: '位置の設定',
      options: [
        'left',
        'center',
        'right',
      ],
      control: {
        type: 'select',
        labels: {
          left: '左',
          center: '中央',
          right: '右',
        },
      },
    },
    // 角丸フィールド
    rounded: {
      name: '角丸',
      description: '角丸有り',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    // ナビゲーションクリック時の処理
    onClickNav: {
      action: 'ナビゲーションクリック',
    },
    // 前に戻るクリック時の処理
    onClickNavPrev: {
      action: '前に戻るクリック',
    },
    // 次に進むクリック時の処理
    onClickNavNext: {
      action: '次に進むクリック',
    },
  },
};

const Template = (args) => ({
  components: { VPagination },
  setup() {
    return { args };
  },
  template: '<v-pagination v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  total: 100,
};
