import VPagination from '../../components/atoms/VPagination';

export default {
  title: 'Atoms/Pagination',
  component: VPagination,
  // argTypes: {
  //   // 項目フィールド
  //   items: {
  //     name: '項目',
  //     description: '項目のデータ',
  //     control: {
  //       type: 'object',
  //     },
  //   },
  //   // X位置フィールド
  //   positionX: {
  //     name: 'X位置',
  //     description: 'X位置の設定',
  //     options: [
  //       'left',
  //       'center',
  //       'right',
  //     ],
  //     control: {
  //       type: 'select',
  //       labels: {
  //         left: '左',
  //         center: '中央',
  //         right: '右',
  //       },
  //     },
  //   },
  //   // Y位置フィールド
  //   positionY: {
  //     name: 'Y位置',
  //     description: 'Y位置の設定',
  //     options: [
  //       'top',
  //       'center',
  //       'bottom',
  //     ],
  //     control: {
  //       type: 'select',
  //       labels: {
  //         top: '上',
  //         center: '中央',
  //         bottom: '下',
  //       },
  //     },
  //   },
  //   // 閉じるクリック時の処理
  //   onClose: {
  //     action: '閉じるクリック',
  //   },
  // },
};

const Template = (args) => ({
  components: { VPagination },
  setup() {
    return { args };
  },
  template: '<v-pagination v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
// Default.args = {
//   items: [
//     {
//       message: 'message1',
//     },
//     {
//       message: 'message2',
//     },
//     {
//       message: 'message3',
//     },
//     {
//       message: 'message4',
//     },
//     {
//       message: 'message5',
//     },
//   ],
// };
