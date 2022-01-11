import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './Login.css'
import UseAuthContextAPI from '../../Hooks/UseAuthContextAPI';

const Login = () => {
    //modal state here
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // authentication state here...
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState('')

    const { firebaseContext } = UseAuthContextAPI();
    const { setUser, error, setError, googleSignIn, githubSignIn, coustomUserLogin, userPasswordReset } = firebaseContext;


    const loginClickHandler = (e) => {
        e.preventDefault();
        handleUserLogin(email, password)
    }

    // google sign in functionality herre...
    const googleClickHandeler = () => {
        googleSignIn()
            .then((res) => {
                const user = res.user;
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    // github sign in functionality herre...
    const githubClickHandeler = () => {
        githubSignIn()
            .then((res) => {
                const user = res.user;
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    //get email in email input field..
    const handleGetEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    //get password in password input field...
    const handleGetPassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    //couston user login functionality here....
    const handleUserLogin = (email, password) => {
        coustomUserLogin(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                setNotification('User Logged In Successfully!')
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    //user Password Reset functionality here
    const handleUserPasswordReset = (email) => {
        userPasswordReset(email)
            .then(() => {
                setNotification('Please check your email Password reset link send...')
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }


    return (
        <div className='container p-5'>
            <h4 className='text-center p-3 loginText' >Login Now!</h4>
            <Form onSubmit={loginClickHandler} className='w-50 m-auto px-5 login'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleGetEmail} type="email" placeholder="Enter email" />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleGetPassword} type="password" placeholder="Password" />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Text className="text-muted">
                    {notification ? notification : error}
                </Form.Text> <br /> <br />

                <div className='d-flex justify-content-between '>
                    <Button variant="success" type="submit">
                        Login Now
                    </Button>
                    <Button onClick={() => { handleUserPasswordReset(email) }}>Reset Password</Button>
                </div>
            </Form>

            <div className='w-50 m-auto mt-4'>
                <Button onClick={googleClickHandeler} variant="success" type="submit">
                    Google Sign In
                </Button> &nbsp;&nbsp;

                <Button onClick={githubClickHandeler} variant="secondary" type="submit">
                    GitHub Sign In
                </Button> &nbsp;&nbsp;

                <Button onClick={handleShow} variant="primary" type="submit">
                    Facebook Sign In
                </Button>
            </div>

            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Facebook Button</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Developper is still working yet! 💻 ⌨️ 🖥 Pleace Wait dude!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>

    );
};

export default Login;