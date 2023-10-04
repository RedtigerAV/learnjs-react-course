import ReactDOM from 'react-dom/client'
import { Restaurants } from './pages/Restaurants/component';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<Restaurants />);