import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "ember-widget/dist/style.css";
import { EmberChat } from "ember-widget";

const config = {
    secret: import.meta.env.VITE_EMBER_WIDGET_API_KEY,
  };

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
        <App />
        <EmberChat config={config} />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
