import { ThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'
import { HeaderI } from 'utils/interfaces'
import styles from './header.module.scss'

const Header = (props: HeaderI) => {
    const { theme } = useContext(ThemeContext)
    return <div className={`${styles.headerContainer} ${styles[theme]}`}>header Header</div>
}

export default Header
