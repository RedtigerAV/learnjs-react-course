import ReactDOM from 'react-dom/client'
import React from 'react';
import { App } from './App';
import './styles/index.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);