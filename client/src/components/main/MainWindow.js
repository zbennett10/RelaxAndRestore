import React, {Component} from 'react';
import Tab from './Tab';

export default class MainWindow extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="MainWindow">
                <div id="Window">

                </div>

                <nav id="TabContainer">
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
        )
    }
}