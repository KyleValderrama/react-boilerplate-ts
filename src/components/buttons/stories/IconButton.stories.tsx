import { Meta, Story } from "@storybook/react";
import { IconButton } from "..";
import { IconButtonProps } from "../IconButton";

const meta: Meta = {
  title: "buttons/IconButton",
  component: IconButton,
};

export default meta;

const Template: Story<IconButtonProps> = (props) => <IconButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: "IconButton",
};
