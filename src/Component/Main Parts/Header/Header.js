import React from 'react';
import { Dropdown } from 'react-bootstrap';
import img from '../../../Images/logo.png'
import './Header.css'
import ReactCountryFlag from "react-country-flag"

const Header = () => {
    return (
        <div className='container-fluid background-img'>
            <div className="row">
                <div className="col col-lg-4">
                    <img className='w-75' alt='logo' src={img} />
                </div>
                <div className="col col-lg-4">
                    <label className='text-white font' htmlFor="content">100% Free Popcorn Movies and Semx Content</label>
                    <input className='search-input' type="text" name="" id="" placeholder='Search...'/>
                    <button className='button'>Search</button>
                </div>
                <div className="col col-lg-4">
                    <div className="d-flex justify-content-center align-items-start">
                        <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='text-white'>
                                Language <ReactCountryFlag className='ms-1' countryCode="US"></ReactCountryFlag>
                            </Dropdown.Toggle>
                                <Dropdown.Menu className="clr">
                                    <Dropdown.Item className='text-white' href="#/action-1">
                                        <ReactCountryFlag countryCode="US" className="me-3"></ReactCountryFlag>
                                        English
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-2">
                                        <ReactCountryFlag countryCode="ES" className="me-3"></ReactCountryFlag>
                                        Spanish
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">
                                        <ReactCountryFlag countryCode="PT" className="me-3"></ReactCountryFlag>
                                        Portuguese
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">
                                        <ReactCountryFlag countryCode="RU" className="me-3"></ReactCountryFlag>
                                        Russian
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">
                                        <ReactCountryFlag countryCode="ID" className="me-3"></ReactCountryFlag>
                                        Indonesian
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">
                                        <ReactCountryFlag countryCode="IN" className="me-3"></ReactCountryFlag>
                                        Hindi
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">
                                        <ReactCountryFlag countryCode="BD" className="me-3"></ReactCountryFlag>
                                        Bangla
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">
                                        <ReactCountryFlag countryCode="JP" className="me-3"></ReactCountryFlag>
                                        Japan
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='text-white'>
                                Content
                            </Dropdown.Toggle>
                                <Dropdown.Menu className="clr">
                                    <Dropdown.Item className='text-white' href="#/action-1">Haram</Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-2">haram</Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">Totally Haram</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='text-white'>
                                Straight
                            </Dropdown.Toggle>
                                <Dropdown.Menu className="clr">
                                    <Dropdown.Item className='text-white' href="#/action-1">Haram</Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-2">haram</Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">Totally Haram</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;