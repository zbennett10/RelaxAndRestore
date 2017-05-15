import React from 'react';
import ServiceModal from './ServiceModal';

export default (props) => {
    return (
        <li className="list-item service">
            <button className="btn btn-lg btn-primary"
                    onClick={props.toggleModal}>
                Example Service Header
            </button>

            <ServiceModal isOpen={props.isModalOpen}
                          toggleModal={props.toggleModal}/>
        </li>
    )
}