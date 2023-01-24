import './App.css';
import Menu from './componentes/Menu';
import People from './componentes/People';
import Planets from './componentes/Planets';
import Starships from './componentes/Starships';
import Vehicles from './componentes/Vehicles';
import Species from './componentes/Species';
import Films from './componentes/Films';

import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="Menu">
        <Menu /> 
      </div>
      <div className="Rutas">
        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planets />} />
          <Route path="/starships/:id" element={<Starships />} />
          <Route path="/vehicles/:id" element={<Vehicles />} />
          <Route path="/species/:id" element={<Species />} />
          <Route path="/films/:id" element={<Films />} />
          <Route path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
