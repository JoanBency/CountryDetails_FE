import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const HeadNav = styled.nav`
  z-index: 14;
  height: 70px;
  display: flex;
  background: #0080FF;
  justify-content: space-between;
  padding: 0.18rem;
`

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.18rem;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  margin-left: 2%;
  margin-top: 5px;
  `
  export const Title = styled.h1`
  color: #000000;
  font-weight: 3000;
  display: flex;
  align-items: left;
  font-size: 1.5rem;
  margin-left: -15%;
  padding-top: 15px;
`

export const MenuLink = styled(Link)`
  color: #3C0303;
  font-weight: 1000;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  margin-right: 10px;
  height: 100%;
  &.active {
    color: #000000;
  }
`
export const Hamburger = styled(FaBars)`
  
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
    margin-right: 2rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

export const GridItem = styled.div`
  border: none;
  text-align: center;
  padding-left: 30px;
`