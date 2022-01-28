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
import { Route, Routes } from "react-router-dom"

import DashBoard from "./DashBoard"
import Navi from "../Navi/Navi"
import CartDetail from "../Card/CartDetail"
function App() {
  return (
    <div>
      <Row>
        <Navi></Navi>
      </Row>
      <Row>
        <Routes>
          <Route path="/" exact element={<DashBoard />}></Route>
          <Route path="/product" exactelement={<DashBoard />}></Route>
          <Route path="/cart" exact element={<CartDetail />}></Route>
        </Routes>
      </Row>
    </div>
  )
}

export default App
