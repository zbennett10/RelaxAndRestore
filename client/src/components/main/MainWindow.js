import React, {Component} from 'react';
import Tab from './Tab';
import ServicesTab from '../services/ServicesTab';
require('../../style/main-window.css');

export default class MainWindow extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="MainWindowContainer" className="container">
                <div id="TabContainer">
                    <nav>
                        <Tab 
                            name="About"/>
                        <Tab
                            name="Contact"/>
                        <Tab
                            name="Schedule"/>
                        <Tab
                            name="Services"/>
                    </nav>
                </div>
                
                <div id="MainWindow" className="text-center">
                    <ServicesTab/>
                </div>

                
            </div>
        )
    }
}