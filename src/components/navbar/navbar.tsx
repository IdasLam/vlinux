import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles['nav-links']}>
            <Link to="redovisning">redovisning</Link>
            <Link to="om">om</Link>
        </nav>
    )
}

export default Navbar
