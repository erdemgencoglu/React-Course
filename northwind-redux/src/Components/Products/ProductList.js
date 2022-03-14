import React, { Component } from "react"
import { connect } from "react-redux"
import { Badge, Button } from "reactstrap"
import { bindActionCreators } from "redux"
import { Table } from "react-bootstrap"
import alertify from "alertify.js"
import { Link } from 'react-router-dom'

import * as productActions from "../../Redux/Actions/ProductActions"
import * as cartActions from "../../Redux/Actions/CartActions"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts()
  }
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
    alertify.success(product.productName + " sepete eklendi..")
  }

  render() {
    const tableStyle = {
      borderCollapse: "collapse",
    }
    return (
      <div>
        <h3>
          <Badge style={{ marginRight: 5 }}>Products</Badge>
          <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
        </h3>

        <Table striped style={tableStyle}>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>UnitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td scope="row">{product.id}</td>
                <td>
                  <Link to={"/saveproduct/" + product.id}>
                    {product.productName}
                  </Link>
                </td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button color="success" onClick={() => this.addToCart(product)} style={{ float: "right" }}>
                    Sepete Ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
//state i bağla
function mapStateToProbs(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  }
}

export default connect(mapStateToProbs, mapDispatchToProps)(ProductList)
