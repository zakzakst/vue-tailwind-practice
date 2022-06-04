import VTabs from '../../components/atoms/VTabs';

export default {
  title: 'Atoms/Tabs',
  component: VTabs,
  argTypes: {
    // 項目フィールド
    items: {
      name: '項目',
      description: '項目のデータ',
      control: {
        type: 'object',
      },
    },
    // 位置フィールド
    position: {
      name: '位置',
      description: '項目の位置',
      options: [
        'center',
        'right',
      ],
      control: {
        type: 'select',
        labels: {
          center: '中央',
          right: '右',
        },
      },
    },
    // タブクリック時の処理
    onClick: {
      action: 'タブクリック',
    },
  },
};

const Template = (args) => ({
  components: { VTabs },
  setup() {
    return { args };
  },
  template: '<v-tabs v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  items: [
    {
      label: 'item1',
    },
    {
      label: 'item2',
    },
    {
      label: 'item3',
    },
    {
      label: 'active',
      active: true,
    },
    {
      label: 'disabled',
      disabled: true,
    },
  ],
};
