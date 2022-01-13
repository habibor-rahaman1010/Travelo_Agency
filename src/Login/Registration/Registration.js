import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UseAuthContextAPI from '../../Hooks/UseAuthContextAPI';
import './Registration.css'

const Registration = () => {
    const { firebaseContext } = UseAuthContextAPI();
    const { error, setError, googleSignIn, githubSignIn, coustomUserCreate, emailVerify, coustomUpdateProfile } = firebaseContext;

    const location = useLocation();
    const history = useHistory();
    const redirect_URI = location?.state?.from || '/home'

    //this is my modal state here
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //this is my firebase authentication stae....
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState('')

    const registrationClickHandler = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 character!')
        }
        else if (!/(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*].*[!@#$&*])(?=.*[0-9].*[0-9])/.test(password)) {
            setError('two capital latter and two spacial character and two digit number')
        }
        else {
            createUser(email, password);
        }

    };

    // google sign in functionality herre...
    const googleClickHandeler = () => {
        googleSignIn()
            .then(() => {
                history.push(redirect_URI)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    // github sign in functionality herre...
    const githubClickHandeler = () => {
        githubSignIn()
            .then(() => {
                history.push(redirect_URI)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    //get email in email input field..
    const handleGetName = (e) => {
        const name = e.target.value;
        setName(name);
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

    // coustom create a user funtionality here....
    const createUser = (email, password) => {
        coustomUserCreate(email, password)
            .then(() => {
                history.push(redirect_URI)
                setDisplayName(name);
                Verified_Email();
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    //email verified funtionality here...
    const Verified_Email = () => {
        emailVerify()
            .then(() => {
                setNotification('Please check your email and verify your account...')
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    //set displau name of user....
    const setDisplayName = (name) => {
        const userDisplayName = {
            displayName: name
        }
        coustomUpdateProfile(userDisplayName)
            .then(() => {

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    };


    return (
        <div className='container p-5'>
            <h4 className='text-center p-3 registrationText' >Registration Now!</h4>
            <Form onSubmit={registrationClickHandler} className='w-50 m-auto px-5 registration'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleGetName} type="text" placeholder="Enter Name" required />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleGetEmail} type="email" placeholder="Enter email" required />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleGetPassword} type="password" placeholder="Password" required />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Text className="text-muted ">
                    <span className='notification'>
                        {notification ? notification : error}
                    </span>
                </Form.Text> <br /> <br />

                <Button variant="success" type="submit">
                    Registration Now
                </Button>
            </Form>

            <div className='w-50 m-auto mt-4'>
                <p>Are You Alreay Registered? <Link to={'/login'}>Pleace Can Login Now!</Link> </p>
            </div>

            <div className='w-50 m-auto mt-4'>
                <Button onClick={googleClickHandeler} variant="success" type="submit">
                    Google Sign In
                </Button> &nbsp;&nbsp;

                <Button onClick={githubClickHandeler} variant="secondary" type="submit">
                    GitHub Sign In
                </Button> &nbsp;&nbsp;

                <Button onClick={handleShow} variant="primary" type="submit">
                    FaceBook Sign In
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

export default Registration;