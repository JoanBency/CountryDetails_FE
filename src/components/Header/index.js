import React from 'react'
import { HeadNav, PrimaryNav, MenuLink, Menu, Logo, Title, GridContainer, GridItem } from './NavStyle'
import logo from '../../assets/world-logo.png' 
const Navbar = () => {
  return (
    <>
      <HeadNav>
      <PrimaryNav>
        <GridContainer>
          <GridItem><Logo src={ logo } alt="logo" /></GridItem>
          <GridItem><Title>Country Details</Title></GridItem>
        </GridContainer>
        </PrimaryNav>
        <Menu>
          <MenuLink to="/">
            Home
          </MenuLink>
          <MenuLink to="/search">
            Search
          </MenuLink>
          {/* <MenuLink to="/" activeStyle>
            Search
          </MenuLink> */}
        </Menu>
      
      </HeadNav>
    </>
  )
}
export default Navbar;