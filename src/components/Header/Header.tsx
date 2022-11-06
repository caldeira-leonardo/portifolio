import { ThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'
import { i18n } from 'translate/i18n'
import { HeaderI, LanguegesI } from 'utils/interfaces'
import './header.scss'
import darkMode from 'components/assets/icons/darkMode.png'
import lightMode from 'components/assets/icons/lightMode.png'
import Flag from 'react-world-flags'
import Select from 'components/elements/Select/Select'

const I18N_STORAGE_KEY = 'i18nextLng'

const Header = (props: HeaderI) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const handleSelectLanguage = (value: string) => {
        localStorage.setItem(I18N_STORAGE_KEY, value)
        const language = window.location
        window.location = language //todo fix this to don't lose the theme when change the language
        setTheme(theme)
    }

    const languageOptions: LanguegesI[] = [
        {
            name: 'Portugues',
            handleLanguage: () => handleSelectLanguage('pt-BR'),
            flagCode: 'br',
            key: 'pt',
        },
        {
            name: 'English',
            handleLanguage: () => handleSelectLanguage('en-US'),
            flagCode: 'us',
            key: 'en',
        },
        {
            name: 'Español',
            handleLanguage: () => handleSelectLanguage('es-ES'),
            flagCode: 'es',
            key: 'es',
        },
    ]

    const render = (option: LanguegesI, onClick?: (key: string) => void) => {
        return (
            <div
                onClick={() => (onClick ? onClick(option.key) : {})}
                key={option.key}
                className="optionWrapper"
                data-toggle="tooltip"
                title="Tooltip na parte inferior"
            >
                <Flag code={option.flagCode} height="12" className="languageFlag" />
                <p className="optionTitle">{option.name}</p>
            </div>
        )
    }

    return (
        <div className={`headerContainer ${theme}`}>
            header Header
            <div className="rightOptions">
                <Select
                    key="asd"
                    options={languageOptions}
                    render={render}
                    defaultOptionKey={localStorage.getItem(I18N_STORAGE_KEY).split('-')[0]}
                />
                <label
                    className="switchWrapper"
                    data-toggle="tooltip"
                    title={theme === 'light' ? i18n.t('alterar para tema escuro') : i18n.t('alterar para tema claro')}
                >
                    <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
                    <span className={`slider round`} />
                    <img
                        src={theme === 'dark' ? darkMode : lightMode}
                        className={theme === 'light' ? 'darkMode' : 'lightMode'}
                        alt=""
                    />
                </label>
            </div>
        </div>
    )
}

export default Header
