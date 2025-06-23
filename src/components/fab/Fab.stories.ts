import type { Meta, StoryObj } from '@storybook/html-vite';
import type { FAB_SIZE } from './fab.config';
import { icons_names } from '../../utils/icon-names';

interface FabProps {
    size: FAB_SIZE;
    icon: string;
};

const meta = {
    title: 'Fab',
    tags: ['autodocs'],
    render: (args: FabProps) => {
        return `<div style="width: 100%; height: 10rem">
            <md-fab
                size="${args.size}"
                icon="${args.icon}"
            ></md-fab>
        </div>`;
    },
    argTypes: {
        size: {
            description: 'The size of the fab',
            options: ['default', 'medium', 'large'],
            table: {
                defaultValue: { summary: 'default' },
                subcategory: 'Material Design',
            },
            control: { type: 'select' }
        },
        icon: {
            description: 'The icon that is going to be displayed on the fab',
            options: icons_names,
            table: {
                subcategory: 'Material Design',
            },
            control: { type: 'select' }
        },
    }
} satisfies Meta<FabProps>;

export default meta;
type Story = StoryObj<{}>;

export const Default: Story = {
    args: {
        size: 'default',
        icon: 'home'
    },
};
