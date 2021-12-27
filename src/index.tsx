import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeView from './routes/home';
import GameView from './routes/game';
import ModView from './routes/mod';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<HomeView />} />
          <Route path="game" element={<GameView />} />
          <Route path="mod" element={<ModView />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
