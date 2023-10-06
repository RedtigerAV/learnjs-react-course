import ReactDOM from 'react-dom/client'
import { Restaurants } from './pages/Restaurants/component';
import { ThemeProvider } from './contexts/Theme';

import './styles/light-theme.scss';
import './styles/dark-theme.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ThemeProvider>
        <Restaurants />
    </ThemeProvider>
);