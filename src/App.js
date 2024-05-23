
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Componentes/Menu';
import FreeVersion from './Componentes/FreeVersion';
import NotFound from './Componentes/NotFound';

function App() {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/free-version' element={<FreeVersion />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      
    </>
  );
}

export default App;
