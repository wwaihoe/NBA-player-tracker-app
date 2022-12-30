import React, { useState } from "react";
import MiniProfile from "./components/MiniProfile";
import FilterButton from "./components/FilterButton";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const FILTER_MAP_TEAM = {
  All: () => true,
  LAL: (player) => player.team === "LAL", 
  NOR: (player) => player.team === "NOR", 
  CHI: (player) => player.team === "CHI"
};
const FILTER_NAMES_TEAM = Object.keys(FILTER_MAP_TEAM);

const FILTER_MAP_FAV = {
  All: () => true,
  Favourite: (player) => player.favourite
};
const FILTER_NAMES_FAV = Object.keys(FILTER_MAP_FAV);

function App(props) {
  const [players, setPlayers] = useState(props.players);
  const [filter_Fav, setFilter_Fav] = useState('All');
  const [filter_Team, setFilter_Team] = useState('All');
  function togglePlayerFav(id) {
    const updatedPlayers = players.map((player) => {
      if (id === player.id) {
        return {...player, favourite: !player.favourite}
      }
      return player;
    });
    setPlayers(updatedPlayers);
  }   
  const playerList = players
  .filter(FILTER_MAP_TEAM[filter_Team])
  .filter(FILTER_MAP_FAV[filter_Fav])
  .map((player) => (
    <MiniProfile
      id={player.id}
      name={player.name}
      team={player.team}
      ppg={player.ppg}
      favourite={player.favourite}
      togglePlayerFav={togglePlayerFav}
    />
  ));
  const filterList_Team = FILTER_NAMES_TEAM.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter_Team}
      setFilter={setFilter_Team}
    />
  ));  
  const filterList_Fav = FILTER_NAMES_FAV.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter_Fav}
      setFilter={setFilter_Fav}
    />
  ));  
  return (
    <Container fluid="xl">
      <h1><img src="NBA_logo.png" alt="NBA_logo" width="80" height="181.3"/>   NBA Player Tracker</h1>
        <Stack gap={1}>
          <div className="my-1"> 
            {filterList_Team}
          </div>
          <div className="my-1">
            {filterList_Fav}
          </div>
        </Stack>
        &nbsp;
        <div className="player-list">
          <Container>
            <Row className="gap-3">
              {playerList.length === 0 && "Empty List"}
              {playerList}
            </Row>
          </Container>
        </div>
    </Container>
  );
}

export default App;