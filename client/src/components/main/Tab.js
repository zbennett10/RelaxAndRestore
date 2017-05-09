import React from 'react';

export default (props) => {
    return (
        <a 
            href={`#${props.name}`}
            onClick={props.showTab}>{props.name}</a>
    )
} 