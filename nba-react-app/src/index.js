import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "006", name: "Lebron James", team: "LAL", ppg: "28.6" },
  { id: "023", name: "Anthony Davis", team: "LAL", ppg: "27.5" },
  { id: "015", name: "Austin Reeves", team: "LAL", ppg: "12.1" }, 
  { id: "101", name: "Zion Williamson", team: "NOR", ppg: "25.3" }, 
  { id: "202", name: "Lonzo Ball", team: "CHI", ppg: "13.7" }
];

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App players={DATA} />);