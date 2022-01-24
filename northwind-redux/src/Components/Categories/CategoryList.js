import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as categoryActions from "../../Redux/Actions/CategoryActions"
import { ListGroup, ListGroupItem } from "reactstrap"
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }
  render() {
    return (
      <div>
        <h3>Category List</h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem key={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        <h5>Seçili Kategori:{this.props.currentCategory}</h5>
      </div>
    )
  }
}

function mapStateToProbs(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
    },
  }
}

export default connect(mapStateToProbs, mapDispatchToProps)(CategoryList)
