import ReactDOM from 'react-dom/client'
import { MainPage } from './pages/MainPage/component';
import { ThemeProvider } from './contexts/Theme';

import './styles/index.scss';
import { ActiveRestaurantIndexContextProvider } from './contexts/ActiveRestaurantIndex';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ThemeProvider>
        <ActiveRestaurantIndexContextProvider>
            <MainPage />
        </ActiveRestaurantIndexContextProvider>
    </ThemeProvider>
);