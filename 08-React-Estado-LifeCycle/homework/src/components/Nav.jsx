import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    
        <nav className={styles.nav} >
         
          <img className={styles.LogoHenry} src={Logo} alt=""/>
          <span className={styles.spanNav}>  Henry - Weather App </span>
          
          <Link to='/about'>
          <span className={styles.spanAbout}>About</span>
          </Link>
          <Link to="/">
          <span className={styles.spanHome}>Home</span>
          </Link>
          <SearchBar onSearch={onSearch}/>
        </nav>

    
  );
};

export default Nav;
