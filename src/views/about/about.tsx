import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/layout'
import styles from '../home/home.module.scss'
// import { Helmet } from 'react-helmet'

import CodeIcon from '@material-ui/icons/Code'
import GitHubIcon from '@material-ui/icons/GitHub'
import EcoIcon from '@material-ui/icons/Eco'

const About = () => {
    console.log(window.location)

    return (
        <Layout>
            {/* <Helmet>
                <title>Ida Lam | Om</title>
            </Helmet> */}
            <h1>Om</h1>
            <CodeIcon className={styles['icon']} />
            <h2>Läs mer om kursen på:</h2>
            <div className="links">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/dbwebb-se/vlinux"
                >
                    <GitHubIcon fontSize="large" />
                    GitHub
                </a>
                <br />
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dbwebb.se/kurser/vlinux-v1"
                >
                    <EcoIcon fontSize="large" />
                    Dbwebb
                </a>
            </div>
        </Layout>
    )
}

export default About
