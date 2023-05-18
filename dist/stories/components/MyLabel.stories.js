import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
const meta = {
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
const Template = (args) => _jsx(MyLabel, { ...args });
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    label: 'Normal',
    allCaps: false,
    color: 'primary',
};
export const h1 = {
    args: {
        size: 'h1',
        label: 'h1',
    },
};
export const AllCaps = {
    args: {
        size: 'normal',
        allCaps: true,
        label: 'AllCaps',
    },
};
export const Secondary = {
    args: {
        size: 'normal',
        color: 'secondary',
        label: 'Secondary',
    },
};
export const Tertiary = {
    args: {
        size: 'normal',
        color: 'tertiary',
        label: 'Tertirary',
    },
};
export const CustomColor = {
    args: {
        size: 'h1',
        label: 'CustomColor',
        fontColor: '#ff0000',
    },
};
