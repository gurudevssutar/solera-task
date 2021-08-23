import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import Backdrop from './Pages/Backdrop'
import SideDrawer from "./Pages/SideDrawer";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [drawerIsOpen,setDrawerIsOpen]=useState(false);

  const openDrawer = ()=>{
    setDrawerIsOpen(true);
  }

  const closeDrawer=()=>{
    setDrawerIsOpen(false);
  }
  
  return (
    
    <>
    {drawerIsOpen ? <Backdrop onClick={closeDrawer }/>:null}
    <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <div className="sdbase">
          <nav >
            <Link className="sdlinks" to="/">Multivitamin</Link><br/>
            <Link className="sdlinks" to="/">Protein</Link><br/>
            <Link className="sdlinks" to="/">Pregnancy</Link><br/>
            <Link className="sdlinks" to="/">Bundles</Link><br/><br/>
            <Link className="sdlinks1" to="/whoweare">Who We Are</Link><br/>
            <Link className="sdlinks1" to="/">Ingredients</Link><br/>
            <Link className="sdlinks1" to="/">Our Clinical Study</Link><br/>
          </nav>
        </div>
        
    </SideDrawer>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click?"nav-menu active":"nav-menu"}> 
          <li className="nav-item" id="div1">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                onClick={openDrawer}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item ritu-class" >
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                id="ritual"
                
              >
                Ritual
              </NavLink>
            </li>
            <li className="nav-item who-class">
              <NavLink
                exact
                to="/whoweare"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                id="who"
              >
                Who We Are
              </NavLink>
            </li>
            <li className="nav-item buy-class">
              <NavLink
                exact
                to="/buy"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                id="buy"
              >
                <i class="fas fa-shopping-bag"></i>
              </NavLink>
            </li>

          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
