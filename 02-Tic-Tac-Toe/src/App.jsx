import './index.css'
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              Player 1
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              Player 2
              <span className="player-symbol">0</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>
        GAME BAR
      </div>
      LOGS
    </main>
  )
}

export default App
