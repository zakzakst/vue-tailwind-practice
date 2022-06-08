import VDropdown from '../../components/atoms/VDropdown';

export default {
  title: 'Atoms/Dropdown',
  component: VDropdown,
  argTypes: {
    // 文言フィールド
    label: {
      name: '文言',
      description: 'ドロップダウンの文言',
      control: {
        type: 'text',
      },
    },
    // 項目フィールド
    items: {
      name: '項目',
      description: '項目のデータ',
      control: {
        type: 'object',
      },
    },
  },
};

const Template = (args) => ({
  components: { VDropdown },
  setup() {
    return { args };
  },
  template: '<v-dropdown v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  label: 'ドロップダウン',
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
