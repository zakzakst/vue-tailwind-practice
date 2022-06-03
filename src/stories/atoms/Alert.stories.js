import VAlert from '../../components/atoms/VAlert';

export default {
  title: 'Atoms/Alert',
  component: VAlert,
  argTypes: {
    // 表示フィールド
    show: {
      name: '表示',
      description: '表示状態',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    // 色フィールド
    color: {
      name: '色',
      description: 'アラートの色',
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
    // 却下可能フィールド
    dismissible: {
      name: '却下可否',
      description: 'アラートの却下が可能か',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    clickClose() {
      console.log(this);
    },
  },
};

const Template = (args) => ({
  components: { VAlert },
  setup() {
    return { args };
  },
  template: '<v-alert v-bind="args"><template v-slot:icon><b>link<br>aa<br>aa</b></template>文言が入ります。文言が入ります。文言が入ります。文言が入ります。文言が入ります。文言が入ります。文言が入ります。文言が入ります。文言が入ります。<div>test</div></v-alert>',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  dismissible: true,
};
