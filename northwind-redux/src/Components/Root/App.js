import React, { Component } from "react"
import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Row,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap"
import DashBoard from "./DashBoard"
import Navi from "../Navi/Navi"
function App() {
  return (
    <Container>
      <Row>
        <Navi></Navi>
      </Row>
      <Row>
        <DashBoard></DashBoard>
      </Row>
    </Container>
  )
}

export default App
