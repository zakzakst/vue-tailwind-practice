import VButton from '../../components/atoms/VButton';

export default {
  title: 'Atoms/Button',
  component: VButton,
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
    // 無効フィールド
    disabled: {
      name: '無効',
      description: 'ボタンの無効',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    // 外線スタイルフィールド
    outlined: {
      name: '外線スタイル',
      description: 'ボタンの外線スタイル',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    // 角丸スタイルフィールド
    rounded: {
      name: '角丸スタイル',
      description: 'ボタンの角丸スタイル',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    // クリックメソッド
    onClick: {
      action: 'ボタンクリック',
    },
  },
};

const Template = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<v-button v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  label: 'ボタン',
};

export const Disabled = Template.bind({});
Disabled.storyName = '無効';
Disabled.args = {
  label: 'ボタン',
  disabled: true,
};
