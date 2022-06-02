import MyButton from '../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: MyButton,
  argTypes: {
    // backgroundColor: { control: 'color' },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
      ],
    },
    // onClick: {},
    size: {
      control: { type: 'select' },
      options: [
        'small',
        'large',
      ],
    },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
};

export const Small = Template.bind({});
Small.args = {
  disabled: true,
  size: 'small',
  label: 'Small',
};