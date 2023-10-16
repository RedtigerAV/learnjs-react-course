import { ThemeProvider } from './contexts/Theme'
import { MainPage } from './pages/MainPage/component'
import { store } from './redux';
import { Provider } from 'react-redux';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <MainPage />
            </ThemeProvider>
        </Provider>
    )
}