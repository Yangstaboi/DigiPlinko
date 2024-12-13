import "./App.css";
import PlinkoBoard from "./components/PlinkoBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Boba Plinko</p>
      </header>
      <main>
        <div id="plinko-board">
          <PlinkoBoard />
        </div>
        <div id="controls">
          <button>Drop Ball</button>
        </div>
      </main>
    </div>
  );
}

export default App;
