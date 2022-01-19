import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { decreasecounter } from "../redux/action/counterActions"

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(decreasecounter())
          }}>
          1 eksilt
        </button>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreasecounter, dispatch) }
}

export default connect(mapDispatchToProps)(DecreaseCounter)
