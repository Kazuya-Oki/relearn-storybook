import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Profile } from "./Profile";

const meta = {
  title: "Example/Profile",
  component: Profile,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    follower: {
      type: "number",
      control: {
        min: 1,
        max: 1000000,
      },
    },
  },
  args: {
    name: "name",
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "大塩 平八郎",
    avatar: "dog",
    follower: 10,
    backgroundColor: "#485353",
    description: "江戸時代の儒学者",
  },
};

export const ClickButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const followButton = canvas.getByTestId("follow-button");
    await userEvent.click(followButton);

    await expect(followButton).toBeDisabled();
  },
  args: {
    name: "大塩 平八郎",
    avatar: "dog",
    follower: 10,
    backgroundColor: "#485353",
    description: "江戸時代の儒学者",
  },
};
