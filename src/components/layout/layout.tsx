import React, { FunctionComponent } from 'react'
// import Navbar from "../navbar/navbar";
import Footer from '../footer/footer'
import Header from '../header/header'

const Layout: FunctionComponent = (props) => {
    return (
        <React.Fragment>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
