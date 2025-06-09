import type { Meta, StoryObj } from '@storybook/html-vite';
import { icons_names } from './icon-names';

interface ButtonProps {
  size: string;
  shape: string;
  color: string;
  label: string;
  icon: string | null;
}

const meta = {
  title: 'Demo',
  tags: ['autodocs'],
  render: (args: ButtonProps) => {
    return `<md-button
        icon="${args.icon ? args.icon : ''}"
        size="${args.size}"
        shape="${args.shape}"
      >${args.label}</md-button>`
  },
  argTypes: {
    size: {
      description: 'The size of the button',
      options: ['extra_small', 'small', 'medium', 'large', 'extra_large'],
      table: {
        defaultValue: { summary: 'medium' },
        subcategory: 'Material Design',
      },
      control: { type: 'select' }
    },
    shape: {
      description: 'The shape of the button',
      options: ['square', 'round'],
      table: {
        defaultValue: { summary: 'square' },
        subcategory: 'Material Design',
      },
      control: { type: 'select' }
    },
    icon: {
      description: 'The icon that is going to be displayed on the button',
      options: icons_names,
      table: {
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
    shape: "square",
    icon: null
  },
};
