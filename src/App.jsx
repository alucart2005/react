import "./styles.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
