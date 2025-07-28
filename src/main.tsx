import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@react95/core/themes/win95.css';
import { useClippy, ClippyProvider, AGENTS } from '@react95/clippy';

createRoot(document.getElementById('root')!).render(
    <App />
)
