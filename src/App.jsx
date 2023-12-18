import { useState } from 'react'
import Header from './components/header'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from './components/DisplayCounter';
import Container from './components/Container';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/store/privacyMessage';

function App() {
  const privacy=useSelector(store=>store.privacy);
  return (
    
    <centre className="px-4 py-5 my-5 text-center">
    <Container>
   
    
   <Header/>
    <div className="col-lg-6 mx-auto">
   {privacy?<PrivacyMessage/>:<DisplayCounter/>} 
    <Controls/>
   </div>
   </Container>
      </centre>
 
    
 ); 
}

export default App
