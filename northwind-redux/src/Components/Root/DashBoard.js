import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import CategoryList from "../Categories/CategoryList"
import ProductList from "../Products/ProductList"
class DashBoard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CategoryList></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList></ProductList>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DashBoard
