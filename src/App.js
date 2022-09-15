import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import NavScrollExample from './components/Navbar1';
const App = () => {
  return (
    <BrowserRouter>
    <NavScrollExample/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;