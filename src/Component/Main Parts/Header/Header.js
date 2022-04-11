import React from 'react';
import { Button, Container, Dropdown, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import ReactCountryFlag from 'react-country-flag';
import './Header.css'
import img from './../../../Images/logo.png'

const Header = () => {
    return (
        <Navbar className='background-img' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
        <img className='w-75 h-25' alt='logo' src={img} />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse id="navbarScroll">
    <Form>
        <label className='text-white font' htmlFor="content">100% Free Popcorn Movies and Semx Content</label> <br />
        <input className='search-input' type="text" name="" id="" placeholder='Search...'/>
        <button className='button'>Search</button>
      </Form>
    <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Dropdown className='me-3'>
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
                        <Dropdown className='me-3'>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='text-white'>
                                Content
                            </Dropdown.Toggle>
                                <Dropdown.Menu className="clr">
                                    <Dropdown.Item className='text-white' href="#/action-1">Haram</Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-2">haram</Dropdown.Item>
                                    <Dropdown.Item className='text-white' href="#/action-3">Totally Haram</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
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
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;