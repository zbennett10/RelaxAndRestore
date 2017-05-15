import React, {Component} from 'react';
import Tab from './Tab';
import ServicesTab from '../services/ServicesTab';
import ScheduleTab from '../schedule/ScheduleTab';
import ContactTab from '../contact/ContactTab';
import AboutTab from '../about/AboutTab';
require('../../style/main-window.css');

export default class MainWindow extends Component {
    constructor(props) {
        super();
        this.changeCurrentView = this.changeCurrentView.bind(this);

        this.state = {
            currentView: <ServicesTab/>,
            views: {
                services: <ServicesTab/>,
                schedule: <ScheduleTab/>,
                contact: <ContactTab/>,
                about: <AboutTab/>
            }
        }

    }


    changeCurrentView(viewString) {
        this.setState({
            currentView: this.state.views[viewString]
        });
    }
    


    render() {
        const {currentView} = this.state;

        return (
            <div id="MainWindowContainer" className="container">
                <div id="TabContainer">
                    <nav>
                        <Tab onClick={this.changeCurrentView.bind(null, 'about')}
                             name="About"/>
                        <Tab onClick={this.changeCurrentView.bind(null, 'contact')}
                             name="Contact"/>
                        <Tab onClick={this.changeCurrentView.bind(null, 'schedule')}
                             name="Schedule"/>
                        <Tab onClick={this.changeCurrentView.bind(null, 'services')}
                             name="Services"/>
                    </nav>
                </div>
                
                <div id="MainWindow" className="text-center">
                    {currentView}
                </div>

                
            </div>
        )
    }
}