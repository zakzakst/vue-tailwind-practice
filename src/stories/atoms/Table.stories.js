import VTable from '../../components/atoms/VTable';

export default {
  title: 'Atoms/Table',
  component: VTable,
  argTypes: {
    // 項目フィールド
    items: {
      name: '項目',
      description: '項目のデータ',
      control: {
        type: 'object',
      },
    },
    // ヘッダー項目フィールド
    headers: {
      name: 'ヘッダー項目',
      description: 'ヘッダー項目のデータ',
      control: {
        type: 'object',
      },
    },
  },
};

const Template = (args) => ({
  components: { VTable },
  setup() {
    return { args };
  },
  template: '<v-table v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  headers: [
    { text: '食品名', },
    { text: 'カロリー', },
    { text: '脂肪', },
    { text: 'タンパク質', },
  ],
  items: [
    {
      name: 'ヨーグルト',
      calories: 159,
      fat: 6.0,
      carbs: 24,
    },
    {
      name: 'アイスクリーム',
      calories: 237,
      fat: 9.0,
      carbs: 37,
    },
    {
      name: 'エクレア',
      calories: 262,
      fat: 16.0,
      carbs: 23,
    },
    {
      name: 'カップケーキ',
      calories: 305,
      fat: 3.7,
      carbs: 67,
    },
    {
      name: 'クッキー',
      calories: 356,
      fat: 16.0,
      carbs: 49,
    },
  ],
};