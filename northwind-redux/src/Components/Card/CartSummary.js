import React, { Component } from "react"
import { connect } from "react-redux"
import { Badge, Button } from "reactstrap"
import { bindActionCreators } from "redux"
import * as cartActions from "../../Redux/Actions/CartActions"
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
  UncontrolledDropdown,
} from "reactstrap"
class CartSummary extends Component {
  renderEmty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz boş</NavLink>
      </NavItem>
    )
  }
  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName} <Badge color="success">{cartItem.quantity}</Badge>
              <Badge color="danger" onClick={() => this.props.actions.removeFromCart(cartItem.product)}>
                X
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Sepete Git</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  render() {
    return <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmty()}</div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  }
}

//state i bağla
function mapStateToProbs(state) {
  return {
    cart: state.cartReducer,
  }
}

export default connect(mapStateToProbs, mapDispatchToProps)(CartSummary)
