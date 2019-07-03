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
                    <Link to="/" className="nav-item nav-link active text-white">About</Link>
                    <Link to="/" className="nav-item nav-link active text-white">Projects</Link>
                    <Link to="/" className="nav-item nav-link active text-white">Resume</Link>
                </div>
            </div>
            <div className={open !== true ? "sidenav sidenavClosed" : "sidenav sidenavOpen"} onClick={()=>setOpen(!open)}>
                <div className="close black"> </div>
                <Link to="/" onClick={()=>setOpen(!open)}>Home</Link>
                <Link to="/" onClick={()=>setOpen(!open)}>About</Link>
                <Link to="/" onClick={()=>setOpen(!open)}>Projects</Link>
                <Link to="/" onClick={()=>setOpen(!open)}>Resume</Link>
            </div>
        </nav>
    );

}

export default Navbar;