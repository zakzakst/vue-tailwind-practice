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
    // // X位置フィールド
    // positionX: {
    //   name: 'X位置',
    //   description: 'X位置の設定',
    //   options: [
    //     'left',
    //     'center',
    //     'right',
    //   ],
    //   control: {
    //     type: 'select',
    //     labels: {
    //       left: '左',
    //       center: '中央',
    //       right: '右',
    //     },
    //   },
    // },
    // // Y位置フィールド
    // positionY: {
    //   name: 'Y位置',
    //   description: 'Y位置の設定',
    //   options: [
    //     'top',
    //     'center',
    //     'bottom',
    //   ],
    //   control: {
    //     type: 'select',
    //     labels: {
    //       top: '上',
    //       center: '中央',
    //       bottom: '下',
    //     },
    //   },
    // },
    // // 閉じるクリック時の処理
    // onClose: {
    //   action: '閉じるクリック',
    // },
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
  items: [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1%',
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1%',
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: '7%',
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: '8%',
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: '16%',
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0%',
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: '2%',
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: '45%',
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: '22%',
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: '6%',
    },
  ],
};