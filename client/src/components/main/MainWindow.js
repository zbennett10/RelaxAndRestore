import React, {Component} from 'react';
import Tab from './Tab';
require('../../../style/main-window.css');

export default class MainWindow extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="MainWindowContainer" className="container">
                <div id="OuterTabContainer">
                    <nav id="InnerTabContainer">
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
                    
                </div>

                
            </div>
        )
    }
}