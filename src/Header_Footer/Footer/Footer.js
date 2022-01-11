import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#ECEFF1' }}>
            <div class="my-5">

                <footer
                    class="text-center text-lg-start text-dark"
                    style={{ backgroundColor: '#ECEFF1' }}
                >

                    <section
                        class="d-flex justify-content-between p-4 text-white"
                        style={{ backgroundColor: '#21D192' }}
                    >

                        <div class="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>



                        <div>
                            <a href="##" class="text-white me-4">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="##" class="text-white me-4">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="##" class="text-white me-4">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="##" class="text-white me-4">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="##" class="text-white me-4">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Web-Developer-Hub" class="text-white me-4" rel='noreferrer' target={'_blank'}>
                                <i class="fab fa-github"></i>
                            </a>
                        </div>

                    </section>



                    <section class="">
                        <div class="container text-center text-md-start mt-5">

                            <div class="row mt-3">

                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Travelo</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>



                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Places</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        <Link to={"/#australia!"} class="text-dark">Australia</Link>
                                    </p>
                                    <p>
                                        <Link to={"/#switzerland!"} class="text-dark">Switzerland</Link>
                                    </p>
                                    <p>
                                        <Link to={"/#italy!"} class="text-dark">Italy</Link>
                                    </p>
                                    <p>
                                        <Link to={"/#france!"} class="text-dark">France</Link>
                                    </p>
                                </div>



                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        <a href="#!" class="text-dark">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-dark">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-dark">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-dark">Help</a>
                                    </p>
                                </div>



                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 class="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i class="fas fa-envelope mr-3"></i> travelo@gmail.com</p>
                                    <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>

                            </div>

                        </div>
                    </section>


                    <div
                        class="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                    >
                        © 2020 Copyright all reserved travelo |
                        <a class="text-dark" href="https://github.com/Web-Developer-Hub" rel="noreferrer" target={'_blank'}> Developer</a>
                    </div>

                </footer>

            </div>

        </div >
    );
};

export default Footer;