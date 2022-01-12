import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Navi from "./Navi"
import ProductList from "./ProductList"
import CategoryList from "./CategoryList"
import { render } from "react-dom"

class App extends Component {
  state = {
    currentCategory: "",
    produtcs: [],
    cart: [],
  }

  //Didmount cycle
  componentDidMount() {
    this.getProducts()
  }
  //Kategori değiştirme eventi
  changeCatogory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }

  //Fetch ile api ürün listesi isteği
  getProducts = (categoryId) => {
    let url = "http://localhost:3001/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ produtcs: data }))
  }

  //Sepete Ekleme
  addToCart = (product) => {
    let newCart = this.state.cart
    //İtem eklenmiş ise
    const addedItem = newCart.find((c) => c.product.id === product.id)
    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
      this.setState({ cart: newCart })
    }
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id)
    this.setState({ cart: newCart })
  }

  render() {
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    //
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart}></Navi>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCatogory={this.changeCatogory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.produtcs}
                currentCategory={this.state.currentCategory}
                info={productInfo}
                addtocart={this.addToCart}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
