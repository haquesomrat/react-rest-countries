import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://api.openbrewerydb.org/breweries')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Hello from countries:{countries.length}</h1>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        key={country.postal_code}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;