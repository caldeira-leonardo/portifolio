import { ThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'
import { TextI } from 'utils/interfaces'
import './text.scss'

const Text = (props: TextI) => {
    const { children, style, size } = props
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`textContainer ${size || 'normal'} ${theme}`} style={style}>
            {children}
        </div>
    )
}

export default Text
