import React, {Fragment} from 'react';
import {NotificationContainer} from 'react-notifications';
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";

const Layout = props => {
    return (
        <div>
            <NotificationContainer/>
            <Header/>
            <main style={{marginTop: '20px'}}>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;