import React, { Component } from "react"

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h4>{this.props.currentCategory}</h4>
      </div>
    )
  }
}

export default ProductList
