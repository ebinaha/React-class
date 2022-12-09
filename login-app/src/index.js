import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CookiesProvider} from 'react-cookie';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    {/* 전체기능에 넣고 싶은 경우 BrowserRouter 바깥을 싸줘야함 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>
);

reportWebVitals();
