import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Col, Container, Row, Form, Nav } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
// import { Grid, Paper } from '@mui/material';

const ViewCountry = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [CountryData, setCountryData] = useState(location.state);
    const [viewBasicDetails, setViewBasicDetails] = useState(true);
    const [viewLocationDetails, setViewLocationDetails] = useState(false);
    const [viewOthers, setViewOthers] = useState(false);
    console.log(location);
    const handleBackClick = () => {
        navigate(-1);
    };

    const handleCountryData = () => {
        setCountryData(location.state);
        return true;
    };

    const handleViewBasicDetails = () => {
        setViewBasicDetails(true);
        setViewLocationDetails(false);
        setViewOthers(false);
    };

    const handleViewLocationDetails = () => {
        setViewLocationDetails(true);
        setViewBasicDetails(false);
        setViewOthers(false);
    };

    const handleViewOthers = () => {
        setViewOthers(true);
        setViewBasicDetails(false);
        setViewLocationDetails(false);
    };

    window.addEventListener('hashchange', function (event) {
        location.state = CountryData;
    });


    return (
        <>
        {CountryData && (
            <Container>
                <h1 className="h1" style={{ paddingTop: 60 }}>View Country</h1>
                <br />
                <br />
                <br />
                <Card style={{ width: '60vw', marginLeft: '8vw' }}>
                    <Card.Img variant="top" src={CountryData.flags.png} />
                    <Card.Title style={{ fontSize: 30, paddingLeft: "25vw" }}>{CountryData.name.common}</Card.Title>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link onClick={handleViewBasicDetails}>Basic Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={handleViewLocationDetails}>Location Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={handleViewOthers} >Others</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                    {viewBasicDetails && (
                        <Card.Text>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>    
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Capital</Form.Label>
                                        <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{CountryData.capital}</Form.Text>                           
                                    </Form.Group>  
                                </Col> 
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Region</Form.Label>
                                        <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{CountryData.region}</Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>SubRegion</Form.Label>
                                        <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{CountryData.subregion}</Form.Text>
                                    </Form.Group>   
                                </Col>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                                <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Population</Form.Label>
                                                <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{CountryData.population}</Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Area</Form.Label>
                                        <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{CountryData.area}</Form.Text>
                                    </Form.Group> 
                                </Col>  
                            </Row>
                        </Card.Text>
                    )}
                    {viewLocationDetails && (
                        <Card.Text>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Location(lat/long)</Form.Label>
                                        <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{CountryData.latlng[0]}&deg; {CountryData.latlng[1]}&deg;</Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Timezone</Form.Label>
                                        <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{CountryData.timezones[0]}</Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Border Countries</Form.Label>
                                        {/* <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{CountryData.borders[0]}</Form.Text> */}
                                        <Container style={{ marginLeft: '60%' }}>
                                            
                                            {CountryData.borders && CountryData.borders.map((border) => (
                                            <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: 120, height: 50, borderRadius: 10, backgroundColor: "#CCFFFF" , borderStyle: "solid", borderWidth: 1, fontSize: 18, paddingLeft: 40, paddingTop: 15, marginBottom: 10 }}>{border}</Col>
                                            ))}
                                            
                                        </Container>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Text>
                    )}
                    {viewOthers && (
                        <Card.Text>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Native Name</Form.Label>
                                        <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{Object.values(CountryData.name.nativeName)[0].official}</Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Currency</Form.Label>
                                        <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{Object.values(CountryData.currencies)[0].name} - {Object.values(CountryData.currencies)[0].symbol}</Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                            <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>Languages</Form.Label>
                                            {Object.values(CountryData.languages) && Object.values(CountryData.languages).map((language) => (
                                            <Form.Text className="content-text text-overflow view-content-text" style={{ fontSize: 15 }}>{language}, </Form.Text>
                                            ))}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                            {CountryData.independent ? (
                                            <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>{CountryData.name.common} is an independent country</Form.Label>
                                            ) : (
                                            <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>{CountryData.name.common} is not an independent country</Form.Label>
                                            )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className='mb-3'>
                                        {CountryData.unMember ? (
                                            <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>{CountryData.name.common} is a member of the UN</Form.Label>
                                        ) : (
                                            <Form.Label column sm={6} className="content-title view-content-title" style={{ marginLeft: '9vw', fontSize: 20 }}>{CountryData.name.common} is not a member of the UN</Form.Label>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                        </Card.Text>
                    )}

                        <Button variant="primary" onClick={handleBackClick}>Back</Button>
                    </Card.Body>
                </Card>
            </Container>
        )}
        </>

    );
};

export default ViewCountry;