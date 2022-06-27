import VCard from '../../components/atoms/VCard';
import VImg from '../../components/atoms/VImg';

export default {
  title: 'Atoms/Card',
  component: VCard,
  argTypes: {
    // リンクフィールド
    link: {
      name: 'リンク',
      description: 'リンク',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    // リンク別窓フィールド
    targetBlank: {
      name: 'リンク別窓',
      description: 'リンク別窓',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => ({
  components: { VCard, VImg },
  setup() {
    return { args };
  },
  template: `
    <v-card v-bind="args">
      <template v-slot:head>
        <v-img src="https://picsum.photos/1000/800" :height="200" cover skeleton />
      </template>
      <h5 class="text-2xl font-bold tracking-tight text-gray-900">タイトル</h5>
      <p class="mt-2 font-normal text-gray-700">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <template v-slot:foot>
        <div class="bg-primary p-2 text-center text-sm text-white">下部エリア</div>
      </template>
    </v-card>
  `,
});

export const Default = Template.bind({});
Default.storyName = '通常';
