import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { increasecounter } from "../redux/action/counterActions"

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increasecounter())
          }}>
          1 arttır
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increasecounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseCounter)
