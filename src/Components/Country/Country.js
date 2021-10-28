import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, city, state, code } = props.country;
    console.log(props.country);

    return (
        <div className='country'>
            <h4>This is:{name}</h4>
            <p>City Name:{city}</p>
            <h5>State:{state}</h5>
            <h6>Country Code:{code}</h6>

        </div>
    );
};

export default Country;