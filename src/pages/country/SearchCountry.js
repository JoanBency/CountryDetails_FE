import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import TextField from "@mui/material/TextField";


const SearchCountry = () => {
    const [CountryName, setCountryName] = useState(''); // This is the state variable
    const [CountryData, setCountryData] = useState([]); // This is the state variable
    const [CardDisplayed, setCardDisplayed] = useState(false); // This is the state variable
    const navigate = useNavigate();

    const CountryNameChangeHandler = (e) => {
        setCountryName(e.target.value);
        if(CountryName.length > 1) {
        // setCardDisplayed(true);
        fetch(`https://countrydetails-api.herokuapp.com/api/country/${CountryName}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 404) {
                    setCardDisplayed(false);
                }
                else {
                    setCardDisplayed(true);
                    setCountryData(data);
                }
                console.log(data);
            });
        }
    };

    const handleCardClick = (country) => {
        console.log(country);
        // window.location.href = `/view-country/${country.name.common}`;
        // Link(`/view-country/${country.name.common}`);
        navigate(`/view-country/${country.name.common}`, {state: country});
    };



    return (
        <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <React.Fragment>
            <Container>
            <h1 className="h1" style={{ paddingTop: 60 }}>Search Countries</h1>
            <div class="input-group rounded pt-4">
                <input type="search" class="form-control rounded" placeholder="Search Countries" aria-label="Search" aria-describedby="search-addon" value={CountryName} onChange={CountryNameChangeHandler} />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="modus-icon material-icons">search</i>
                </span>
            </div>
            <br />
            <br />
            <br />
            {CardDisplayed ? (
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {CountryData.map((country) => (
                        <div class="col">
                            <div class="card h-100" onClick={() => handleCardClick(country)}>
                                <img src={country.flags.png} class="card-img-top" alt={country.flags.alt} />
                                <div class="card-body">
                                    <h3 class="card-title">{country.name.common}</h3>
                                    <p class="card-text">
                                        <b>Capital:</b> {country.capital}
                                    </p>
                                    <p class="card-text">
                                        <b>Region:</b> {country.region}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div></div>
            )
            }
            </Container>
        </React.Fragment>
        </>
    )};

export default SearchCountry;