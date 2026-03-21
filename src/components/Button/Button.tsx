import styles from './Button.module.scss'


interface ButtonProps {
    text?: string
    isActive?: boolean
    iconButton?: boolean
    icon?: string
    iconWidth?: number
    iconHeight?: number
    className?: string
}


const Button = (props: ButtonProps) => {
    if (props.iconButton) {
        return (
            <button
                className={`${props.isActive ? styles.container : styles.unActiveContainer} ${props.className || ""}`}>
                <img src={`./assets/icons/${props.icon}.svg`}
                     width={props.iconWidth} height={props.iconHeight}
                     alt={`${props.icon}`}/>
            </button>
        )
    }
    return (
        <button className={`${props.isActive ? styles.container : styles.unActiveContainer} ${props.className || ""}`}>
            {props.text}
        </button>
    )
}


export default Button