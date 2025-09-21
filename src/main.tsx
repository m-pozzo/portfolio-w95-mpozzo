import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@react95/core/themes/win95.css';
import './i18n.ts';


createRoot(document.getElementById('root')!).render(
    <App />
)
