import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ListingPage from './pages/ListingPage'
import AOS from 'aos';
import { useEffect } from 'react';
import Property from './components/Profile-Components/Properties/Profile-Property-Component/Property';
import PropertyForm from './components/Profile-Components/Properties/propertyForm/PropertyBaseForm/PropertyForm';
import PropertyDetailsFrom from './components/Profile-Components/Properties/propertyForm/PropertyDetailsForm/PropertyDetailsFrom';
import OwnerDetailsForm from './components/Profile-Components/Properties/propertyForm/OwnerDetailsForm/OwnerDetailsForm';
import ManagerDetailsFrom from './components/Profile-Components/Properties/propertyForm/ManagerDetailsForm/ManagerDetailsFrom';
import ConfirmForm from './components/Profile-Components/Properties/propertyForm/ConfirmForm/ConfirmForm';
import SuccessPage from './components/Profile-Components/Properties/propertyForm/successPage/SuccessPage';

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
          <Route path='/propertyForm' element={<PropertyForm/>}/>

          {/* property Listing forms */}
          <Route path='/propertyForm/propertyDetails' element={<PropertyDetailsFrom/>}/>
          <Route path='/propertyForm/ownerDetails' element={<OwnerDetailsForm/>}/>
          <Route path='/propertyForm/managerDetails' element={<ManagerDetailsFrom/>}/>
          <Route path='/propertyForm/confirmDetails' element={<ConfirmForm/>}/>
          <Route path='/propertyForm/successPage' element={<SuccessPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
