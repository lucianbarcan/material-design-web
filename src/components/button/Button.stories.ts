import type { Meta, StoryObj } from '@storybook/html-vite';

interface ButtonProps {
  size: string;
  shape: string;
  color: string;
  label: string;
}

const meta = {
  title: 'Demo',
  tags: ['autodocs'],
  render: (args: ButtonProps) => {
    return `<md-button
        size="${args.size}"
      >${args.label}</md-button>`
  },
  argTypes: {
    size: {
      description: 'The size of the button',
      options: ['extra_small', 'small', 'medium', 'large', 'extra_large'],
      defaultValue: 'default',
      table: {
        defaultValue: { summary: 'medium' },
        subcategory: 'Material Design',
      },
      control: { type: 'select' }
    },
    label: {
      description: 'The label text of the button',
      table: {
        subcategory: 'Button',
      },
      control: { type: 'text' }
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    size: "medium",
    label: "Click Me",
  },
};
