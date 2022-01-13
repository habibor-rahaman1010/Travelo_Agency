import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../Components/About/About';
import AllpupolerPlaces from '../Components/AllPupolerPlaces/AllPupolerPlaces/AllPupolerPlaces';
import Blogs from '../Components/Blogs/Blogs/Blogs';
import Destinations from '../Components/Destination/Destinations/Destinations';
import Home from '../Components/Home/Home';
import NotFound from '../Components/NotFound/NotFound';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import MyAuthProvider from '../ContextAPI/MyAuthProvider';
import Footer from '../Header_Footer/Footer/Footer';
import Header from '../Header_Footer/Header/Header';
import Login from '../Login/Login/Login';
import Registration from '../Login/Registration/Registration';
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

                        <Route exact path={'/about'}>
                            <About></About>
                        </Route>

                        <Route exact path={'/popular_places'}>
                            <AllpupolerPlaces></AllpupolerPlaces>
                        </Route>

                        <PrivateRoute exact path={'/blogs'}>
                            <Blogs></Blogs>
                        </PrivateRoute>

                        <PrivateRoute exact path={'/destinations'}>
                            <Destinations></Destinations>
                        </PrivateRoute>


                        <Route exact path={'/login'}>
                            <Login></Login>
                        </Route>

                        <Route exact path={'/registration'}>
                            <Registration></Registration>
                        </Route>


                        <Route exact path={'*'}>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </MyAuthProvider>
        </div>
    );
};

export default Main;