import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Navi from "./Navi"
import ProductList from "./ProductList"
import CategoryList from "./CategoryList"
import { render } from "react-dom"
import alertify from "alertifyjs"
import toastr from "toastr"
import { Routes, Route } from "react-router-dom"
import Notfound from "./Notfound"
import CartList from "./CartList"
import FormDemo1 from "./FormDemo1"

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
    }
    this.setState({ cart: newCart })
    //Toast settings
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "1000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    }
    toastr.success(product.productName + " added to card!")
    //alertify.success(product.productName + " added to card!")
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id)
    this.setState({ cart: newCart })
    toastr.error(product.productName + " card removed!")
  }

  render() {
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    //
    return (
      <div>
        <Container>
          {/* Navigation component */}
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart}></Navi>
          <Row>
            {/* CategoriList component */}
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCatogory={this.changeCatogory} info={categoryInfo}></CategoryList>
            </Col>
            {/* Product List component */}
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      products={this.state.produtcs}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                      addtocart={this.addToCart}
                      authed={true}
                    />
                  }
                />
                <Route exact path="/cart" element={<CartList cart={this.state.cart} removeFromCart={this.removeFromCart} authed={true} />} />
                <Route path="/form1" element={<FormDemo1 />} />
                <Route path="*" element={<Notfound />} /> {/*all paths (*) */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
