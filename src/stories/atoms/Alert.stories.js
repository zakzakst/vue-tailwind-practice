import VAlert from '../../components/atoms/VAlert';

export default {
  title: 'Atoms/Alert',
  component: VAlert,
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
    // 色フィールド
    color: {
      name: '色',
      description: 'アラートの色',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
      ],
      control: {
        type: 'select',
        labels: {
          primary: 'メインカラー',
          secondary: 'セカンダリカラー',
          success: '成功',
          danger: '警告',
          warning: '注意',
          info: '補足',
        },
      },
    },
    // 却下可能フィールド
    dismissible: {
      name: '却下可能',
      description: 'アラートの却下が可能か',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    onClickDismiss: {
      action: '閉じるボタンクリック',
    },
  },
};

const Template = (args) => ({
  components: { VAlert },
  setup() {
    return { args };
  },
  template: `
    <v-alert v-bind="args">
      <p class="-mt-1">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
    </v-alert>
  `,
});

export const Default = Template.bind({});
Default.storyName = '通常';

export const Dismissible = Template.bind({});
Dismissible.storyName = '閉じるボタン';
Dismissible.args = {
  dismissible: true,
};

const TemplateIcon = (args) => ({
  components: { VAlert },
  setup() {
    return { args };
  },
  template: `
    <v-alert v-bind="args">
      <template v-slot:icon>
        <svg width="16" height="16" class="w-6 h-6 fill-gray-700" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      </template>
      <p class="-mt-1">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
    </v-alert>
  `,
});

export const Icon = TemplateIcon.bind({});
Icon.storyName = 'アイコン付き';
