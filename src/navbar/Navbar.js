import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark font">
            <div className="navbar-brand orange">ŠŽ</div>
                <div className="justified icon" onClick={()=>setOpen(!open)}> </div>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link active text-white">Home</Link>
                    <Link to="/about" className="nav-item nav-link active text-white">About</Link>
                    <Link to="/projects" className="nav-item nav-link active text-white">Projects</Link>
                    <Link to="/resume" className="nav-item nav-link active orange">Resume</Link>
                </div>
            </div>
            <div className={open !== true ? "sidenav sidenavClosed" : "sidenav sidenavOpen"}>
                <div className="close black" onClick={()=>setOpen(!open)}> </div>
                <Link to="/" onClick={()=>setOpen(!open)}>Home</Link>
                <Link to="/about" onClick={()=>setOpen(!open)}>About</Link>
                <Link to="/projects" onClick={()=>setOpen(!open)}>Projects</Link>
                <Link to="/resume" onClick={()=>setOpen(!open)}>Resume</Link>
            </div>
        </nav>
    );

}

export default Navbar;