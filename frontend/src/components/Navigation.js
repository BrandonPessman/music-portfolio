import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText
} from 'reactstrap'

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar light expand='md' style={{ fill: 'transparent' }}>
        <NavbarBrand href='/' style={{ color: 'white' }} className='mr-auto'>
          Brandon Pessman
        </NavbarBrand>
        <NavbarText style={{ color: 'white' }}>
          Email:{' '}
          <span style={{ color: 'grey' }}>pessman.brandon@gmail.com</span>
        </NavbarText>
      </Navbar>
    </div>
  )
}

export default Navigation
