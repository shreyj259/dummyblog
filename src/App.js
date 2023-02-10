import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import BlogEdit from './components/BlogEdit';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Home from './components/Pages/Home';

function App() {

  return (
    <>
    <NavBar/>
    <Container>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog/:id' element={<BlogPage/>} /> 
      <Route path='/blog/edit/:id' element={<BlogEdit/>} /> 
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
     
    </Container>
    </>
 );
}

export default App;
