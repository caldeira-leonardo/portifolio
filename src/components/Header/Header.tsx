import { ThemeContext } from 'context/ThemeContext'
import { useContext, useState } from 'react'
import { i18n } from 'translate/i18n'
import { HeaderI } from 'utils/interfaces'
import styles from './header.module.scss'
import darkMode from 'components/assets/icons/darkMode.png'
import lightMode from 'components/assets/icons/lightMode.png'
import Flag from 'react-world-flags'

const I18N_STORAGE_KEY = 'i18nextLng'

const Header = (props: HeaderI) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
    const handleSelectLanguage = (e: React.FormEvent<HTMLSelectElement>) => {
        localStorage.setItem(I18N_STORAGE_KEY, e.currentTarget.value)
        const language = window.location
        window.location = language
    }

    return (
        <div className={`${styles.headerContainer} ${styles[theme]}`}>
            header Header
            <div className={styles.selectsWrapper}>
                <select onChange={handleSelectLanguage} value={language}>
                    <option value="pt-BR">
                        <Flag code="br" height="16" />
                        Portugues
                    </option>
                    <option value="en-US">
                        <Flag code="us" height="16" />
                        English
                    </option>
                    <option value="es-ES">
                        <Flag code="es" height="16" />
                        Español
                    </option>
                </select>

                <label className={styles.switchWrapper}>
                    <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
                    <span className={`${styles.slider} ${styles.round}`} />
                    <img
                        src={theme === 'dark' ? darkMode : lightMode}
                        className={theme === 'light' ? styles.darkMode : styles.lightMode}
                        alt={theme === 'light' ? i18n.t('alterar para tema escuro') : i18n.t('alterar para tema claro')}
                    />
                </label>
            </div>
        </div>
    )
}

export default Header
