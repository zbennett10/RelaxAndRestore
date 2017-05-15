import React from 'react';
import {Modal} from 'react-bootstrap';

export default (props) => {
    return(
        <Modal show={props.isOpen}
               animation={true}>
            <Modal.Header>
                <h1>Service Name</h1>
            </Modal.Header>

            <Modal.Body>
                <p>Description of services...</p>
            </Modal.Body>

            <Modal.Footer>
                <button 
                    className="btn btn-lg btn-danger"
                    onClick={props.toggleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}