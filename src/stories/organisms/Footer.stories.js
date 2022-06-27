import VFooter from '../../components/organisms/VFooter';

export default {
  title: 'Organisms/Footer',
  component: VFooter,
  // argTypes: {
  //   // 表示フィールド
  //   show: {
  //     name: '表示',
  //     description: '表示状態',
  //     defaultValue: true,
  //     control: {
  //       type: 'boolean',
  //     },
  //   },
  //   // 色フィールド
  //   color: {
  //     name: '色',
  //     description: 'アラートの色',
  //     options: [
  //       'primary',
  //       'secondary',
  //       'success',
  //       'danger',
  //       'warning',
  //       'info',
  //     ],
  //     control: {
  //       type: 'select',
  //       labels: {
  //         primary: 'メインカラー',
  //         secondary: 'セカンダリカラー',
  //         success: '成功',
  //         danger: '警告',
  //         warning: '注意',
  //         info: '補足',
  //       },
  //     },
  //   },
  //   // 却下可能フィールド
  //   dismissible: {
  //     name: '却下可能',
  //     description: 'アラートの却下が可能か',
  //     defaultValue: false,
  //     control: {
  //       type: 'boolean',
  //     },
  //   },
  //   onClickDismiss: {
  //     action: '閉じるボタンクリック',
  //   },
  // },
};

const Template = (args) => ({
  components: { VFooter },
  setup() {
    return { args };
  },
  template: '<v-footer v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
