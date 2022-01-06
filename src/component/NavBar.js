import React from 'react';
import MobileNavigation from './MobileNavigation';
import classes from './NavBar.module.css';
import Navigation from './Navigation';

const Navbar = () => {
    return (
        <div className={classes.NavBar}>
            <Navigation/>
             <MobileNavigation/>
         </div>
    )
}

export default Navbar;
