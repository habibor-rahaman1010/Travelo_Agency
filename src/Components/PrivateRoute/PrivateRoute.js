import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import UseAuthContextAPI from '../../Hooks/UseAuthContextAPI'

const PrivateRoute = ({ children, ...rest }) => {
    const { firebaseContext } = UseAuthContextAPI();
    const { user, isLoading } = firebaseContext;

    if (isLoading) {
        return (
            <Container className='mt-5 text-center'>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
            </Container>
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) => {
                return (
                    user.photoURL || user.email ? children : <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: location
                            }
                        }}
                    >

                    </Redirect>
                )
            }}
        >

        </Route>
    );
};

export default PrivateRoute;