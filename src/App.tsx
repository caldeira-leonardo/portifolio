import Examples from 'components/Examples/Examples'
import { useState } from 'react'
import { i18n } from 'translate/i18n'
import './app.scss'

const I18N_STORAGE_KEY = 'i18nextLng'
function App() {
    const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
    const handleSelectLanguage = (e: React.FormEvent<HTMLSelectElement>) => {
        localStorage.setItem(I18N_STORAGE_KEY, e.currentTarget.value)
        const language = window.location
        window.location = language
    }

    return (
        <>
            <h1>{i18n.t('Minha Aplicação')}</h1>
            <h1>{i18n.t('Está funcionando com n Idiomas')}</h1>
            <h1>{i18n.t('Um pequeno texto')}</h1>
            <h1>{i18n.t('salvar')}</h1>
            <select onChange={handleSelectLanguage} value={language}>
                <option value="pt-BR">portugues</option>
                <option value="en-US">ingles</option>
                <option value="es-ES">espanhol</option>
            </select>
            <Examples />
        </>
    )
}

export default App
