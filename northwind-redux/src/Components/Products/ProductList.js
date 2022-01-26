import React, { Component } from "react"
import { connect } from "react-redux"
import { Badge } from "reactstrap"
import { bindActionCreators } from "redux"
import { Table } from "react-bootstrap"

import * as productActions from "../../Redux/Actions/ProductActions"
class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts()
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
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
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
    },
  }
}

export default connect(mapStateToProbs, mapDispatchToProps)(ProductList)
