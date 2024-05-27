import { Routes, Route, useLocation } from 'react-router-dom';

import './Css/app.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Projects from './Pages/Projects';

function App() {
  const actualPage = useLocation();

  return (
    <>
    {actualPage.pathname !=="/" && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </>

  );
}

export default App;
