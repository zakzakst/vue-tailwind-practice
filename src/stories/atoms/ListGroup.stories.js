import VListGroup from '../../components/atoms/VListGroup';

export default {
  title: 'Atoms/ListGroup',
  component: VListGroup,
  argTypes: {
    // 項目フィールド
    items: {
      name: '項目',
      description: '項目のデータ',
      control: {
        type: 'object',
      },
    },
    // タイプフィールド
    type: {
      name: 'タイプ',
      description: 'リストのタイプ',
      options: [
        'link',
        'button',
      ],
      control: {
        type: 'select',
        labels: {
          link: 'リンク',
          button: 'ボタン',
        },
      },
    },
    // クリックメソッド
    onClick: {
      action: 'ボタンクリック',
    },
  },
};

const Template = (args) => ({
  components: { VListGroup },
  setup() {
    return { args };
  },
  template: '<v-list-group v-bind="args" class="w-48" />',
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

export const Link = Template.bind({});
Link.storyName = 'リンク';
Link.args = {
  type: 'link',
  items: [
    {
      label: 'item1',
      link: '#',
    },
    {
      label: 'item2',
      link: '#',
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
      link: '#',
    },
  ],
};

export const Button = Template.bind({});
Button.storyName = 'ボタン';
Button.args = {
  type: 'button',
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