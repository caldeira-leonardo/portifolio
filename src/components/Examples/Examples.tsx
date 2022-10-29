import Button from 'components/elements/Button/Button'
import Text from 'components/elements/Text/Text'
import Header from 'components/Header/Header'
import { ThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'

const Examples = (props: any) => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <Header />
            <div className={theme}>Hello Worlddd</div>
            <Text size="smaller">{'smaller'}</Text>
            <Text size="small">{'small'}</Text>
            <Text size="normal">{'normal'}</Text>
            <Text size="medium">{'medium'}</Text>
            <Text size="large">{'large'}</Text>
            <Text size="largest">{'largest'}</Text>
            <Text>{'Normal size'}</Text>
            <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Teste</Button>
            <Button size="smaller" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Teste
            </Button>
            <Button size="small" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Teste
            </Button>
            <Button size="normal" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Teste
            </Button>
            <Button size="medium" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Teste
            </Button>
            <Button size="large" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Teste
            </Button>
            <Button size="largest" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Teste
            </Button>
            <Button fullWidth onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Full Width
            </Button>
        </>
    )
}

export default Examples
