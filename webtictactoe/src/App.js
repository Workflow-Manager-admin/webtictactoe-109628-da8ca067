import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';

// PUBLIC_INTERFACE
function App() {
  // Main app container, now renders the TicTacToe UI
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            {/* You may replace or configure this button as appropriate */}
            <button className="btn">Template Button</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div style={{
            paddingTop: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div className="subtitle">Tic Tac Toe Game</div>
            <h1 className="title" style={{ fontSize: "2.6rem" }}>WebTicTacToe</h1>
            <div className="description" style={{ marginBottom: "40px" }}>
              Enjoy a minimalistic and fresh take on Tic Tac Toe! Click a square to play.
            </div>
            {/* Render the actual board */}
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;