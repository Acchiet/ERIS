/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import jogadores from '../data/jogadores';
import './Home.css';
import '../components/Modal.css';
import SearchBar from 'material-ui-search-bar';
//import Footer from '../components/Footer';

function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  function handlePlayerClick(player) {
    setSelectedPlayer(player);
  }

  function closeModal() {
    setSelectedPlayer(null);
  }

  const filteredPlayers = jogadores.filter((player) => {
    if (!searchTerm) return true;
    return player.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="home">
      <img className="logozinha" src='logo_eris.png'></img>
      <div className="search-container">
        <SearchBar
          value={searchTerm}
          onChange={(value) => setSearchTerm(value.toLowerCase())}
          placeholder="Search players..."
          style={{ maxWidth: '100%' }}
        />
      </div>
      <div className="players-container">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="player" onClick={() => handlePlayerClick(player)}>
            <img className="player-image" src={player.icon} alt={player.nome} />
            <div className="player-details">
              <p className="player-username">{player.user}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedPlayer && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-player-image" src={selectedPlayer.imagem} alt={selectedPlayer.nome} />
            <div className="player-details">
              <h2>{selectedPlayer.nome}</h2>
              <p>Gangue: {selectedPlayer.gangue}</p>
              <p>Budget: {selectedPlayer.budget}</p>
            </div>
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
