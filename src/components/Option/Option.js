import React from 'react';
import './Option.css'

const Option = ({ options }) => {

    return (
        <div className='all-option'>
            <li>{options}</li>
        </div>
    );
};

export default Option;