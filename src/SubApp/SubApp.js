import React, { Component } from 'react'
import { connect } from 'react-redux';

import "./SubApp.css";

let subapp_index = 0

class SubApp extends Component {
  constructor() {
    super()
    this.index = subapp_index++
  }

  render() {
    const { count, increment } = this.props

    console.log(`SubApp[${this.index}].count:`, count);

    return (
      <div className="sub-app" onClick={increment}>
        {count}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ count: state })
const mapActionsToProps = (dispatch) => ({ increment: () => dispatch({ type: 'INCREMENT' }) })

export default connect(mapStateToProps, mapActionsToProps)(SubApp);