import VToast from '../../components/atoms/VToast';

export default {
  title: 'Atoms/Toast',
  component: VToast,
  argTypes: {
    // 項目フィールド
    items: {
      name: '項目',
      description: '項目のデータ',
      control: {
        type: 'object',
      },
    },
    // // 位置フィールド
    // position: {
    //   name: '位置',
    //   description: '項目の位置',
    //   options: [
    //     'center',
    //     'right',
    //   ],
    //   control: {
    //     type: 'select',
    //     labels: {
    //       center: '中央',
    //       right: '右',
    //     },
    //   },
    // },
    // // タブクリック時の処理
    // onClick: {
    //   action: 'タブクリック',
    // },
  },
};

const Template = (args) => ({
  components: { VToast },
  setup() {
    return { args };
  },
  template: '<v-toast v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  items: [
    {
      message: 'item1',
    },
    {
      message: 'item2',
    },
    {
      message: 'item3',
    },
    {
      message: 'active',
      active: true,
    },
    {
      message: 'disabled',
      disabled: true,
    },
  ],
};
