import { useState } from 'react';
import { Button, Container, Modal, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuthContextAPI from '../../Hooks/UseAuthContextAPI';
import './Header.css'
import avatar from '../../images/avatar.png'

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { firebaseContext } = UseAuthContextAPI();
    const { user, logOutUser } = firebaseContext;


    let varified = String(user.emailVerified);
    varified = varified[0].toUpperCase() + varified.substring(1);

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link as={NavLink} to="/">Travelo</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar">
                            <Nav.Link as={NavLink} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to={"/destinations"}>Destination</Nav.Link>
                            <Nav.Link as={NavLink} to={"/blogs"}>Blogs</Nav.Link>
                            <Nav.Link as={NavLink} to={"/popular_places"}>Popular Places</Nav.Link>
                            <Nav.Link as={NavLink} to={"/about"}>About</Nav.Link>


                        </Nav>
                        <Nav>
                            {
                                user.photoURL || user.email ? <div className='profile'><span> <button className="myBtn" onClick={handleShow}><img src={user.photoURL ? user.photoURL : avatar} alt="Avater" /></button> </span> &nbsp; &nbsp;
                                    <Button onClick={logOutUser} variant='danger'>Logout</Button> </div> :
                                    [
                                        <Nav.Link as={NavLink} to={"/login"}>Login</Nav.Link>,
                                        <Nav.Link as={NavLink} to={"/registration"}>Sign up</Nav.Link>
                                    ]
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Thsi is my user info modal  */}
            <Modal className='myModal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello, {user.displayName} 🙂</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img className='profileImg' src={user.photoURL ? user.photoURL : avatar} alt="" srcset="" width={150} height={150} />
                    <div className="mt-4">
                        <p>Name: {user?.displayName}</p>
                        <p>Email: {user?.email}</p>
                        <p>Email Verifide: {varified}</p>
                        <p>Last Sign In: {user?.metadata?.lastSignInTime}</p>
                    </div>
                </Modal.Body>

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
    );
};

export default Header;