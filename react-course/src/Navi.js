import React, { Component } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row } from "reactstrap"
import CartSummery from "./CartSummery"
import { Link } from "react-router-dom"

class Navi extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <Row>
          <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">Nortwind App</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem style={{ alignSelf: "center" }}>
                  <Link to="/form1">Form1</Link>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <CartSummery cart={this.props.cart} removeFromCart={this.props.removeFromCart}></CartSummery>
              </Nav>
            </Collapse>
          </Navbar>
        </Row>
        {/* End NAVBAR */}
      </div>
    )
  }
}

export default Navi
