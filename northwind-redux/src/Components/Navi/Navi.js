import React, { Component } from "react"
import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  UncontrolledDropdown,
} from "reactstrap"
class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navi
