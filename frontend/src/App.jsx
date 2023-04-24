import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ListingPage from './pages/ListingPage'
import AOS from 'aos';
import { useEffect } from 'react';
import Property from './components/Profile-Components/Properties/Property';

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
          <Route path='/properties' element={<Property/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
