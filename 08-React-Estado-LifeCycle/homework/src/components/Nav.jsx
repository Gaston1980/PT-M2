import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './nav.module.css';

function Nav({onSearch}) {
  return (
    
        <nav className={styles.nav} >
          <img className={styles.LogoHenry} src={Logo} alt=""/>
          <span className={styles.spanNav}>  Henry - Weather App </span>
          <SearchBar onSearch={onSearch}/>
        </nav>

    
  );
};

export default Nav;
