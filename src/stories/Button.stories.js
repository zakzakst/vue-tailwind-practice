import MyButton from '../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: MyButton,
  argTypes: {
    // backgroundColor: { control: 'color' },
    backgroundColor: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red'],
    },
    // onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
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
  primary: true,
  label: 'Primary',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};