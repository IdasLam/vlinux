import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['header-me']}>
                <Link to="./">
                    <h1 className={styles['me']}>
                        Ida Lam
                        <InsertEmoticonIcon fontSize="large" />
                    </h1>
                </Link>
            </div>
            <Navbar />
        </header>
    )
}

export default Header
