import React from "react";
import '../styles.css';
import cloud from './cloudy.png';
import { Link } from "react-router-dom";
function Header(props) {
  return (
    
           
    <div style={{backgroundColor: "#e4f0f0", margin:'0', padding:'0'}} className="m">
        <nav style={{backgroundColor: "#e4f0f0" }} className="navbar navbar-expand-lg navbar-light">
            <div style={{backgroundColor: "#e4f0f0" }} className="container-fluid">
            <img style={{ marginLeft:'0%', height:'40px', width:'42px' }}  src={cloud} />
        <a  style={{color: "#f05e4a", marginLeft:'1%' }} className="navbar-brand" href="/"><b>{props.title}</b></a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                   
                    <div className="navbar-nav ms-auto">

                        <Link to="/keeper" style={{marginRight: '30px', color:"blue"}}  className="nav-item nav-link">Keeper</Link>
                    </div>
                    <div className="navbar-nav">
                        <Link style={{marginRight: '30px', color:"blue"}}  to="/weather" className="nav-item nav-link">Weather</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
            
  );
}

export default Header;
