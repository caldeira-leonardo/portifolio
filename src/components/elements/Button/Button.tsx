import { ThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'
import { ButtonI } from 'utils/interfaces'
import Text from 'components/elements/Text/Text'
import './button.scss'

const Button = (props: ButtonI) => {
    const { children, style, size, onClick, fullWidth } = props
    const { theme } = useContext(ThemeContext)

    return (
        <button
            className={`buttonContainer ${fullWidth && 'fullWidth'} ${size || 'normal'} ${theme} `}
            style={style}
            onClick={onClick}
        >
            <Text size={size}>{children}</Text>
        </button>
    )
}

export default Button
