import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/IdasLam">
                <GitHubIcon fontSize="large" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ida-lam-941a331a4/"
            >
                <LinkedInIcon fontSize="large" />
            </a>
        </footer>
    )
}

export default Footer
