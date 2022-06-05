import VBreadcrumb from '../../components/atoms/VBreadcrumb';

export default {
  title: 'Atoms/Breadcrumb',
  component: VBreadcrumb,
  argTypes: {
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
  components: { VBreadcrumb },
  setup() {
    return { args };
  },
  template: '<v-breadcrumb v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  items: [
    {
      link: '#',
      label: 'Home',
    },
    {
      link: '#',
      label: 'Projects',
    },
    {
      label: 'Page',
    },
  ],
};
