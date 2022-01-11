import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Navbar from "./Navbar"
import ProductList from "./ProductList"
import CategoryList from "./CategoryList"
import { render } from "react-dom"

class App extends Component {
  state = {
    currentCategory: "",
    produtcs: [],
  }

  //Didmount cycle
  componentDidMount() {
    this.getProducts()
  }
  //Kategori değiştirme eventi
  changeCatogory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }

  //Fetch ile api ürün listesi isteği
  getProducts = () => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => this.setState({ produtcs: data }))
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
              <ProductList products={this.state.produtcs} currentCategory={this.state.currentCategory} info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
