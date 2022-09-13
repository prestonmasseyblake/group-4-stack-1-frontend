import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Inventory from './pages/Inventory';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inventory />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
