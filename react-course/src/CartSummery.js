import React, { Component } from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, NavItem, NavLink } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
class CartSummery extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          <FontAwesomeIcon icon={(faTimes, faShoppingCart)} style={{ paddingRight: 3 }} />
          Cart List - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu end>
          {/* Mapla Döngü */}
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <FontAwesomeIcon
                onClick={() => this.props.removeFromCart(cartItem.product)}
                color="red"
                icon={faTimes}
                style={{ paddingRight: 5, width: 20 }}
              />
              {cartItem.product.productName} <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Go to cart</Link> {/* href muabbeti yönlendir */}
          </DropdownItem>
          {/* <DropdownItem onClick={this.props.removeFromCart(cartItem.product)}>Reset</DropdownItem> */}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
  emptyCart() {
    return (
      <NavItem>
        <NavLink>
          <FontAwesomeIcon icon={(faTimes, faShoppingCart)} style={{ paddingRight: 3 }} />
          Empty Cartlist
        </NavLink>
      </NavItem>
    )
  }
  render() {
    return <div>{this.props.cart.length > 0 ? this.renderSummary() : this.emptyCart()}</div>
  }
}

export default CartSummery
