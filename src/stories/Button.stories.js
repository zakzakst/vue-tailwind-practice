import MyButton from '../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: MyButton,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        '',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
      ],
    },
    size: {
      control: { type: 'select' },
      options: [
        '',
        'small',
        'large',
      ],
    },
    // onClick: {
    //   action: 'emit("click")',
    // },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = '通常';
Default.args = {
  label: 'ボタン',
};

export const Small = Template.bind({});
Small.args = {
  disabled: true,
  size: 'small',
  label: 'Small',
};