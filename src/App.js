import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import './Css/app.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Projects from './Pages/Projects';
import ProjectPage from './Pages/ProjectPage';
import Contact from './Pages/Contact';
import Other from './Pages/Other';

function App() {
  const actualPage = useLocation();
  const basePath = "/React-Portfolio-PHS";
  const newPath = basePath + "/#/React-Portfolio-PHS/";

  if (window.location.pathname === basePath && !window.location.hash.startsWith("#/")) {
    window.location.replace(newPath);
  }

  return (
    <>
    {actualPage.pathname !==`${basePath}/` && !actualPage.pathname.endsWith("/") && <Navbar/>}
    {actualPage.pathname !==`${basePath}/` && actualPage.pathname.endsWith("/") && <Home/>}
    <Routes>
      <Route path={`${basePath}/`} element={<Home/>}/>
      <Route path={`${basePath}/projects`} element={<Projects/>}/>
      <Route path={`${basePath}/contact`} element={<Contact/>}/>
      <Route path={`${basePath}/other`} element={<Other/>}/>
      <Route path={`${basePath}/project/:id`} element={<ProjectPage/>}/>
    </Routes>
    </>
  );
}

export default App;
