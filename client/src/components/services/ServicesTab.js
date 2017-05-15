import React, {Component} from 'react';
import Service from './Service';
require('../../style/service-tab.css');

export default class ServicesTab extends Component {
    constructor(props) {
        super();
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            modalState: false
        }
    }

    toggleModal() {
        this.setState((state, props) => {
            return {
                modalState: !state.modalState
            }
        })
    }
    

    render() {
        const {modalState} = this.state;

        return(
            <div id="serviceTabContainer" className="tab-window">
                <h1 style={{marginBottom: '15px'}}>Available Services</h1>
                <ul className="list-unstyled service-list">
                    <Service isModalOpen={modalState}
                             toggleModal={this.toggleModal}/>
                    <Service isModalOpen={modalState}
                             toggleModal={this.toggleModal}/>
                    <Service isModalOpen={modalState}
                             toggleModal={this.toggleModal}/>
                    <Service isModalOpen={modalState}
                             toggleModal={this.toggleModal}/>
                </ul>
            </div>
        )
    }
}