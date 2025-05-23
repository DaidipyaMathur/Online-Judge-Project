import React, { useEffect } from 'react'

import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './theme.css'; // Import our theme CSS

import NavBar from './compenents/NavBar/NavBar';
import ScrollToTop from './compenents/ScrollToTop/ScrollToTop';

import { useDispatch } from 'react-redux';
import { fetchQuestionListData } from './store/Questions/questions-actions';
import { getLoggedIn } from './store/Auth/auth-actions'
import Message from './compenents/Message/Message';

import { messageActions } from './store/Message/message-slice'
import FooterFAB from './compenents/FooterFAB/FooterFAB';
import NavigationStack from './compenents/NavigationStack/NavigationStack';
import { ThemeProvider } from './hooks/ThemeContext'; // Import the ThemeProvider

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoggedIn());
        dispatch(fetchQuestionListData());
        dispatch(messageActions.set({
            type: 'info',
            message: 'Welcome to website !',
            description: 'This website is to solve coding questions and check against testcases'
        }))
    }, [dispatch]);

    return (
        <ThemeProvider>
            <div className={classes.App}>
                <NavBar />
                <Message />
                <FooterFAB />
                <ScrollToTop />
                <NavigationStack />
            </div>
        </ThemeProvider>
    );
}

export default App;
