import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as categoryActions from "../../Redux/Actions/CategoryActions"
import * as productActions from "../../Redux/Actions/ProductActions"
import { ListGroup, ListGroupItem, Badge } from "reactstrap"
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category.id)
  }
  render() {
    return (
      <div>
        <h3>
          <Badge>Categoriy List</Badge>
        </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem key={category.id} onClick={() => this.selectCategory(category)} active={this.props.currentCategory.id === category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}
//state i bağla
function mapStateToProbs(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  }
}
//action ları
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  }
}

export default connect(mapStateToProbs, mapDispatchToProps)(CategoryList)
