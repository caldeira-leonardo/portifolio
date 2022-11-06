import { ThemeContext } from 'context/ThemeContext'
import { useContext, useState } from 'react'
import { SelectI } from 'utils/interfaces'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import './select.scss'

const Select = (props: SelectI) => {
    const { style, options, render, defaultOptionKey } = props
    const [selectedOption, setSelectedOption] = useState<string>(defaultOptionKey)
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`selectWrapper ${theme}`} style={style}>
            <div className={`selectedOptionWrapper`} onClick={() => setShowOptions((value) => !value)}>
                {render(options.filter((option) => option.key.toLowerCase() === selectedOption.toLowerCase())[0])}
                {!showOptions ? <HiChevronDown size={14} /> : <HiChevronUp size={14} />}
            </div>

            <div className={`selectOptions`}>
                {showOptions &&
                    options.map((option) => {
                        return render(option, (key: string) => {
                            setSelectedOption(key)
                            option.handleLanguage()
                        })
                    })}
            </div>
        </div>
    )
}

export default Select
