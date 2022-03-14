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
import { Route, Routes, useParams } from "react-router-dom"

import DashBoard from "./DashBoard"
import Navi from "../Navi/Navi"
import CartDetail from "../Card/CartDetail"
import AddOrUpdateProduct from "../Products/AddOrUpdateProduct"
function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Routes>
            <Route path="/" exact element={<DashBoard />}></Route>
            <Route path="/product" exact element={<DashBoard />}></Route>
            <Route path="/cart" exact element={<CartDetail />}></Route>
            <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} ></Route>
          </Routes>
        </Row>
      </Container>
    </div>
  )
}

export default App
