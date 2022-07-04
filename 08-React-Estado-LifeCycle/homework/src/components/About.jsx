import React from 'react';
import styles from "./About.module.css"
import Logo from '../logoHenry.png'


export default function About() {
    return (
<div className={styles.AboutContainer}>
<p> Wheater App created by Gaston Frissiones </p>

<p> Henry Student 2022 </p> 

<img className={styles.LogoHenry} src={Logo} alt=""/>

</div>

    )
}