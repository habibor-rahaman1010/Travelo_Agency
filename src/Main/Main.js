import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import NotFound from '../Components/NotFound/NotFound';
import MyAuthProvider from '../ContextAPI/MyAuthProvider';
import Header from '../Header_Footer/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div className='Main'>
            <MyAuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path={'/'}>
                            <Home></Home>
                        </Route>

                        <Route exact path={'/home'}>
                            <Home></Home>
                        </Route>


                        <Route exact path={'*'}>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </MyAuthProvider>
        </div>
    );
};

export default Main;