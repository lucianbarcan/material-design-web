import type { Meta, StoryObj } from '@storybook/html-vite';
import { icons_names } from './icon-names';

interface ButtonProps {
  size: string;
  shape: string;
  color: string;
  label: string;
  icon: string | null;
  disabled: boolean;
}

const meta = {
  title: 'Button',
  tags: ['autodocs'],
  render: (args: ButtonProps) => {
    return `<md-button
        icon="${args.icon ? args.icon : ''}"
        size="${args.size}"
        shape="${args.shape}"
        color="${args.color}"
        ${args.disabled ? 'disabled' : ''}
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
    color: {
      description: 'The color of the button',
      options: ['elevated', 'filled', 'tonal', 'outlined', 'standard'],
      table: {
        defaultValue: { summary: 'filled' },
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
    disabled: {
      description: 'If the button is disabled or not',
      table: {
        subcategory: 'Button',
      },
      control: { type: 'boolean' }
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    size: "medium",
    label: "Click Me",
    color: 'filled',
    shape: "square",
    disabled: false,
    icon: null
  },
};
