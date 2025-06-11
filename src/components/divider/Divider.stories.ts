import type { Meta, StoryObj } from '@storybook/html-vite';

interface DividerProps {
    inset: boolean;
    insetStart: boolean;
    insetEnd: boolean;
};

const meta = {
    title: 'Divider',
    tags: ['autodocs'],
    render: (args: DividerProps) => {
        return `<div style="width: 100%; max-width: 400px; margin: auto;">
            <md-divider
                ${args.inset ? 'inset' : ''}
                ${args.insetStart ? 'inset-start' : ''}
                ${args.insetEnd ? 'inset-end' : ''}
            ></md-divider>
        </div>`;
    },
    argTypes: {
        inset: {
            description: 'If true, the divider will be inset',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                subcategory: 'Material Design',
            },
        },
        insetStart: {
            description: 'If true, the divider will be inset at the start',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                subcategory: 'Material Design',
            },
        },
        insetEnd: {
            description: 'If true, the divider will be inset at the end',
            control: { type: 'boolean' },
            table: {
                defaultValue: { summary: 'false' },
                subcategory: 'Material Design',
            },
        },
    }
} satisfies Meta<DividerProps>;

export default meta;
type Story = StoryObj<{}>;

export const Default: Story = {
    args: {
        inset: false,
        insetStart: false,
        insetEnd: false,
    },
};
