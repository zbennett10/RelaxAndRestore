import React, {Component} from 'react';
import Service from './Service';
require('../../style/service-tab.css');

export default class ServicesTab extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div id="serviceTabContainer" className="tab-window">
                <h1 style={{marginBottom: '15px'}}>Available Services</h1>
                <ul className="list-unstyled service-list">
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                </ul>
            </div>
        )
    }
}