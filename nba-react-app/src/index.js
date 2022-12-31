import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "006", name: "Lebron James", team: "LAL", ppg: "28.6", apg: "8.3", rpg: "7.9" },
  { id: "023", name: "Anthony Davis", team: "LAL", ppg: "27.5", apg: "4.1", rpg: "9.2" },
  { id: "015", name: "Austin Reeves", team: "LAL", ppg: "12.1", apg: "3.4", rpg: "3.7" }, 
  { id: "101", name: "Zion Williamson", team: "NOR", ppg: "25.3", apg: "5.2", rpg: "8.9" }, 
  { id: "202", name: "Lonzo Ball", team: "CHI", ppg: "13.7", apg: "7.3", rpg: "5.9" }
];

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App players={DATA} />);