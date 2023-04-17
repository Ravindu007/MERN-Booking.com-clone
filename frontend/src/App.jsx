import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ListingPage from './pages/ListingPage'
import AOS from 'aos';
import { useEffect } from 'react';

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
