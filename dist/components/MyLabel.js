import { jsx as _jsx } from "react/jsx-runtime";
import './MyLabel.css';
/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({ label = 'No Label', size = 'h1', allCaps = false, color, fontColor }) => {
    return (_jsx("span", { className: ` label ${size} text-${color}`, style: {
            color: fontColor
        }, children: allCaps ? label.toUpperCase() : label }));
};
