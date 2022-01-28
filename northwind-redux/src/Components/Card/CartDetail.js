import React, { Component } from "react"
import { connect } from "react-redux"
import { Badge, Button, Table } from "reactstrap"
import { bindActionCreators } from "redux"
import * as cartActions from "../../Redux/Actions/CartActions"
import alertify from "alertify.js"
import EmptyCartPage from "../Pages/EmptyCartPage"
class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product)
    alertify.error(product.productName + " sepetten silindi..")
  }

  emptyCartRender() {
    return <EmptyCartPage></EmptyCartPage>
  }

  myCartRender() {
    return (
      <div>
        <Table striped>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantitiy</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <td scope="row">{cartItem.product.id}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button color="danger" onClick={() => this.removeFromCart(cartItem.product)} style={{ float: "right" }}>
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }

  render() {
    {
      return this.props.cart.length === 0 ? this.emptyCartRender() : this.myCartRender()
    }
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

export default connect(mapStateToProbs, mapDispatchToProps)(CartDetail)
