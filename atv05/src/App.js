import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <nav style={{ padding: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Buscar</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Details />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </Router>
  );
}
export default App;
