import React, { useState } from "react";

import Footer from "./components/Footer";
import Keeper from "./Keeper/Keeper";
import Weather from "./Weather/Weather";

import {Route , Redirect} from "react-router-dom";
import './styles.css'

function App() {
  
  return (
    <div>
    
      <Route path="/keeper" component={Keeper}/>
      <Route path="/weather" component={Weather}/>
      
      <Redirect to ='/keeper'/>
      <Footer />
    </div>
  );
}
 
export default App;
