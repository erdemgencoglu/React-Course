import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Navbar from "./Navbar"
import ProductList from "./ProductList"
import CategoryList from "./CategoryList"
import { render } from "react-dom"

class App extends Component {
  state = { currentCategory: "" }
  changeCatogory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }
  render() {
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    //
    return (
      <div>
        <Container>
          <Row>
            <Navbar></Navbar>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCatogory={this.changeCatogory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
