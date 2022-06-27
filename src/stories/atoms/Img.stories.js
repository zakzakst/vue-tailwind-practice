import VImg from '../../components/atoms/VImg';

export default {
  title: 'Atoms/Img',
  component: VImg,
  argTypes: {
    // 画像パスフィールド
    src: {
      name: '画像パス',
      description: '画像のパス・URL',
      control: {
        type: 'text',
      },
    },
    // 代替テキストフィールド
    alt: {
      name: '代替テキスト',
      description: '代替テキスト',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    // 高さフィールド
    height: {
      name: '高さ',
      description: '高さ',
      defaultValue: 0,
      control: {
        type: 'number',
        min: 0,
      },
    },
    // 最大幅フィールド
    maxWidth: {
      name: '最大幅',
      description: '最大幅',
      defaultValue: 0,
      control: {
        type: 'number',
        min: 0,
      },
    },
    // アスペクト比フィールド
    aspectRatio: {
      name: 'アスペクト比',
      description: 'アスペクト比（「[数字]/[数字]」の形で記載）',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    // 角丸フィールド
    rounded: {
      name: '角丸',
      description: '角丸を設定するか',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    // 画像カバーフィールド
    cover: {
      name: '画像カバー',
      description: '画像カバーを設定するか',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    // // 色フィールド
    // color: {
    //   name: '色',
    //   description: 'アラートの色',
    //   options: [
    //     'primary',
    //     'secondary',
    //     'success',
    //     'danger',
    //     'warning',
    //     'info',
    //   ],
    //   control: {
    //     type: 'select',
    //     labels: {
    //       primary: 'メインカラー',
    //       secondary: 'セカンダリカラー',
    //       success: '成功',
    //       danger: '警告',
    //       warning: '注意',
    //       info: '補足',
    //     },
    //   },
    // },
    // onClickDismiss: {
    //   action: '閉じるボタンクリック',
    // },
  },
};

const Template = (args) => ({
  components: { VImg },
  setup() {
    return { args };
  },
  template: '<v-img v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  src: 'https://picsum.photos/800/300',
};
