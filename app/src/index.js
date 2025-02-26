import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

// Create a root element using createRoot (React 18)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(<App />);

// Register the service worker
registerServiceWorker();
