import VModal from '../../components/atoms/VModal';

export default {
  title: 'Atoms/Modal',
  component: VModal,
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
    // タイトルフィールド
    title: {
      name: 'タイトル',
      description: 'タイトルに入る文言',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    // 閉じるクリック時の処理
    onClickClose: {
      action: '閉じるクリック',
    },
    // 背景クリック時の処理
    onClickBg: {
      action: '背景クリック',
    },
  },
};

const Template = (args) => ({
  components: { VModal },
  setup() {
    return { args };
  },
  template: `
    <v-modal v-bind="args">
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
    </v-modal>
  `,
});

export const Default = Template.bind({});
Default.storyName = '通常';

export const Title = Template.bind({});
Title.storyName = 'タイトル付き';
Title.args = {
  title: 'タイトルが入ります',
};

const TemplateFooter = (args) => ({
  components: { VModal },
  setup() {
    return { args };
  },
  template: `
    <v-modal v-bind="args">
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <template v-slot:footer>
        <p class="text-xs">フッターの内容が入ります。</p>
      </template>
    </v-modal>
  `,
});

export const Footer = TemplateFooter.bind({});
Footer.storyName = 'フッター付き';
