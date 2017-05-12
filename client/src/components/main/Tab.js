import React from 'react';
require('../../style/main-window.css');

export default (props) => {
    return (
            <button className="tab"
                    onClick={props.showTab}>{props.name}</button>
    )
} 