import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import the Redux store
import './index.css'; // Import CSS file
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// Import the worker dynamically
async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  
  // Start the Service Worker and wait for it to be ready
  return worker.start();
}

// Call the function to enable mocking
enableMocking().then(() => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container); // createRoot for React 18
    root.render(
      <Provider store={store}>  {/* Wrap App with Provider and pass the store */}
        <App />
      </Provider>
    );
  } else {
    console.error('Root element not found');
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
