import VFooter from '../../components/organisms/VFooter';

export default {
  title: 'Organisms/Footer',
  component: VFooter,
};

const Template = (args) => ({
  components: { VFooter },
  setup() {
    return { args };
  },
  template: '<v-footer v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
