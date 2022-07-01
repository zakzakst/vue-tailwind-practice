import VHeader from '../../components/organisms/VHeader';

export default {
  title: 'Organisms/Header',
  component: VHeader,
  argTypes: {
    // ユーザー情報フィールド
    user: {
      name: 'ユーザー情報',
      description: 'ユーザー情報',
      control: {
        type: 'object',
      },
    },
    // // 色フィールド
    // color: {
    //   name: '色',
    //   description: 'アラートの色',
    //   options: [
    //     'primary',
    //     'secondary',
    //     'success',
    //     'danger',
    //     'warning',
    //     'info',
    //   ],
    //   control: {
    //     type: 'select',
    //     labels: {
    //       primary: 'メインカラー',
    //       secondary: 'セカンダリカラー',
    //       success: '成功',
    //       danger: '警告',
    //       warning: '注意',
    //       info: '補足',
    //     },
    //   },
    // },
    // // 却下可能フィールド
    // dismissible: {
    //   name: '却下可能',
    //   description: 'アラートの却下が可能か',
    //   defaultValue: false,
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    onSignIn: {
      action: 'サインイン',
    },
    onSignOut: {
      action: 'サインアウト',
    },
  },
};

const Template = (args) => ({
  components: { VHeader },
  setup() {
    return { args };
  },
  template: '<v-header v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';

export const SignIn = Template.bind({});
SignIn.storyName = 'サインイン状態';
SignIn.args = {
  user: {
    thumb: 'https://picsum.photos/id/1005/200/200',
    name: '山田 太郎',
    mail: 'yamada@mail.com',
  },
};
