import React, { Component } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"

class CategoryList extends Component {
  state = {
    categories: [],
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.id} onClick={() => this.props.changeCatogory(category)}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    )
  }

  //Fetch ile api get isteği
  getCategories = () => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
  }

  //React life Cycle
  //load olduğunda
  componentDidMount() {
    this.getCategories()
  }
}

export default CategoryList
