import { Routes, Route, useLocation } from 'react-router-dom';

import './Css/app.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Projects from './Pages/Projects';
import ProjectPage from './Pages/ProjectPage';
import Contact from './Pages/Contact';
import Other from './Pages/Other';

function App() {
  const actualPage = useLocation();

  return (
    <>
    {actualPage.pathname !=="/React-Portfolio-PHS" && <Navbar/>}
    <Routes>
      <Route path="/React-Portfolio-PHS" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/other" element={<Other/>}/>
      <Route path="/project/:id" element={<ProjectPage/>}/>
    </Routes>
    </>

  );
}

export default App;
