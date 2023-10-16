import { useContext } from 'react';
import { Button } from '../Button/component'
import { ThemeContext } from '../../contexts/Theme';

export const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <Button
            title={theme === 'light' ? <>&#127768;</> : <>&#127764;</>}
            appearance='fab'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
    )
}