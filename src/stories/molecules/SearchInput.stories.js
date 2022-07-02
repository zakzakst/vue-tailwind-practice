import VSearchInput from '../../components/molecules/VSearchInput';

export default {
  title: 'Molecules/SearchInput',
  component: VSearchInput,
  argTypes: {
    // プレースホルダーフィールド
    placeholder: {
      name: 'プレースホルダー',
      description: 'プレースホルダー文言',
      control: {
        type: 'text',
      },
    },
    // 検索処理
    onSearch: {
      action: '検索',
    },
  },
};

const Template = (args) => ({
  components: { VSearchInput },
  setup() {
    return { args };
  },
  template: '<v-search-input v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  placeholder: '検索キーワード',
};
