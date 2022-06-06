import VSpinner from '../../components/atoms/VSpinner';

export default {
  title: 'Atoms/Spinner',
  component: VSpinner,
  argTypes: {
    // 文言フィールド
    label: {
      name: '文言',
      description: 'ボタンの文言',
      control: {
        type: 'text',
      },
    },
    // 色フィールド
    color: {
      name: '色',
      description: 'ボタンの色',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
      ],
      control: {
        type: 'select',
        labels: {
          primary: 'メインカラー',
          secondary: 'セカンダリカラー',
          success: '成功',
          danger: '警告',
          warning: '注意',
          info: '補足',
        },
      },
    },
    // サイズフィールド
    size: {
      name: 'サイズ',
      description: 'ボタンのサイズ',
      options: [
        'small',
        'large',
      ],
      control: {
        type: 'select',
        labels: {
          small: '小',
          large: '大',
        },
      },
    },
  },
};

const Template = (args) => ({
  components: { VSpinner },
  setup() {
    return { args };
  },
  template: '<v-spinner v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  label: 'ロード中',
};
