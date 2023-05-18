import './MyLabel.css'

export interface ButtonsProps {
    /**
     * Este es el label que se mostrara en el componente
    */
    label?: string
    /**
     * Estos son los tamaños que puede tener el componente
    */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * Para Capitalizar el texto
    */
    allCaps?: boolean
    /**
     * Color del texto
    */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * Color del texto personalizado
    */
    fontColor?: string
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
    label = 'No Label',
    size = 'h1',
    allCaps = false,
    color,
    fontColor
}: ButtonsProps) => {
    return (
        <span className={` label ${size} text-${color}`} style={{
            color: fontColor
        }}>{allCaps ? label.toUpperCase() : label}</span>
    )
}
