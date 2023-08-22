import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import { BsSuitHeartFill } from 'react-icons/bs'
export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <span><BsSuitHeartFill style={{ color: 'red',fontSize: '3.2rem' }} /><span className='mx-1 text-dark '>Rabi's cafe</span> <BsSuitHeartFill style={{ color: 'red' }} /></span>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/brands' className='nav-link'>Brands</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                        <Link to='/category' className='nav-link'>Category</Link>
                    </Nav>

                    <div className="d-flex gap-3">
                    

                        <Link className="btn btn-dark" to='/cart'>Cart</Link>
                        <button className="btn btn-dark"
                            onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })
                            }}
                        >Sign Out</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}