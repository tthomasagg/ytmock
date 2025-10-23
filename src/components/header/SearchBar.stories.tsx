// import { Route } from '@tanstack/react-router'
import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta = {
  title: "Components/Header/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
