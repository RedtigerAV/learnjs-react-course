import { ThemeProvider } from "./contexts/Theme"
import { MainPage } from "./pages/MainPage/component"

export const App = () => {
    return (
        <ThemeProvider>
            <MainPage />
        </ThemeProvider>
    )
}