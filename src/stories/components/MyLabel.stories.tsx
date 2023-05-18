import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ButtonsProps, MyLabel } from "../../components/MyLabel";

const meta: Meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
            }
        },
        color: {
            control: {
                type: 'radio',
                // options: ['primary', 'secondary', 'tertiary']
            }
        },
        fontColor: {
            control: {
                type: 'color',
            }
        },
    },
};

export default meta;

// una forma
const Template: StoryFn<ButtonsProps> = (args) => <MyLabel {...args} />;
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    label: 'Normal',
    allCaps: false,
    color: 'primary',
};

// otra forma
type Story = StoryObj<typeof meta>;
export const h1: Story = {
    args: {
        size: 'h1',
        label: 'h1',
    },
};
export const AllCaps: Story = {
    args: {
        size: 'normal',
        allCaps: true,
        label: 'AllCaps',
    },
};
export const Secondary: Story = {
    args: {
        size: 'normal',
        color: 'secondary',
        label: 'Secondary',
    },
};
export const Tertiary: Story = {
    args: {
        size: 'normal',
        color: 'tertiary',
        label: 'Tertirary',
    },
};
export const CustomColor: Story = {
    args: {
        size: 'h1',
        label: 'CustomColor',
        fontColor: '#ff0000',
    },
};