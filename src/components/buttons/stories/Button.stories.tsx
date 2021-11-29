import { Meta, Story } from "@storybook/react";
import { Button } from "..";
import { ButtonProps } from "../Button";

const meta: Meta = {
  title: "buttons/Button",
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};
