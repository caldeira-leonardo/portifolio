export interface TextI {
    size?: 'smaller' | 'small' | 'normal' | 'medium' | 'large' | 'largest'
    children: string | number
    style?: React.CSSProperties
}

export interface ButtonI {
    size?: 'smaller' | 'small' | 'normal' | 'medium' | 'large' | 'largest'
    children: string | number
    style?: React.CSSProperties
    onClick(): void
    fullWidth?: boolean
}

export interface HeaderI {
    size?: 'smaller' | 'small' | 'normal' | 'medium' | 'large' | 'largest'
    style?: React.CSSProperties
}

export interface SelectI {
    style?: React.CSSProperties
    options: any[]
    key: string
    render: any
    defaultOptionKey: string
}

export interface LanguegesI {
    name: string
    handleLanguage(): void
    flagCode: string
    key: string
}
