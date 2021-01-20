import React from 'react'
import Layout from '../../components/layout/layout'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import styles from './home.module.scss'
// import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <Layout>
            {/* <Helmet>
                <title>Ida Lam</title>
            </Helmet> */}
            <h1>Hejsan,</h1>
            <h1>vad kul att du är här och chillar.</h1>
            <h2 className="regular">Jag heter Ida och är 20 år gammal.</h2>
            <EmojiEmotionsIcon className={styles['icon']} />
        </Layout>
    )
}

export default Home
