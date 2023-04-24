import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ListingPage from './pages/ListingPage'
import AOS from 'aos';
import { useEffect } from 'react';
import Profile from './pages/Profile';

function App() {

  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/listing' element={<ListingPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
