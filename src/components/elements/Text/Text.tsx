import { ThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'
import { TextI } from 'utils/interfaces'
import styles from './text.module.scss'

const Text = (props: TextI) => {
    const { children, style, size } = props
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${styles.textContainer} ${styles[size || 'normal']} ${styles[theme]}`} style={style}>
            {children}
        </div>
    )
}

export default Text
