import React, { Component } from "react"
import { connect } from "react-redux"
import { Badge, Button } from "reactstrap"
import { bindActionCreators } from "redux"
import * as cartActions from "../../Redux/Actions/CartActions"

class CartDetail extends Component {
  render() {
    return <div></div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  }
}

//state i bağla
function mapStateToProbs(state) {
  return {
    cart: state.cartReducer,
  }
}

export default connect(mapStateToProbs, mapDispatchToProps)(CartDetail)
