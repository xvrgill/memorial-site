import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import HomePage from './routes/HomePage';
import EulogyPage from './routes/EulogyPage'
import reportWebVitals from './reportWebVitals';
import GalleryPage from './routes/GalleryPage'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import DownloadPage from './routes/DownloadPage';

Amplify.configure(awsconfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="eulogy" element={<EulogyPage />} />
        <Route path="service" element={<GalleryPage />} />
        <Route path="gallery" exact element={<GalleryPage />} />
        <Route path="download" exact element={<DownloadPage />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
