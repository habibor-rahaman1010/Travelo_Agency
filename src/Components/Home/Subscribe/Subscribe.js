import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscibe'>
            <div className='container sub-section w-50'>
                <div className='sub-text p-3'>
                    <h4>Subscribe Our Newsletter</h4>
                    <small>Subscribe newsletter to get offers and about new places to discover.</small>
                </div>
                <div className='input-section p-3'>
                    <InputGroup className='input'>
                        <FormControl
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Button variant="success" id="button-addon1"> Subscrip </Button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;