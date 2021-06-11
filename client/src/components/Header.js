import React from 'react'
import { CHeader, CHeaderBrand, CContainer } from '@coreui/react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
      <CHeader className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom:20}}>
        <CContainer fluid>
          <CHeaderBrand className='navbar-brand'>Posts</CHeaderBrand>
            <ul className= 'navbar-nav'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>All Post</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/add" className='nav-link'>Add Posts</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/preview" className='nav-link'>Preview</Link>
                </li>
            </ul>
        </CContainer>
      </CHeader>
    </>
    )
}

export default Header;