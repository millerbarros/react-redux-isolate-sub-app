import React, { Component } from 'react'
import { connect } from 'react-redux';

import store from './store'

import "./SubApp.css";

class SubApp extends Component {
  _onClick = () => store.dispatch({ type: 'INCREMENT' })

  render() {
    const { count } = this.props

    console.log('SubApp.count:', count);

    return (
      <div className="sub-app" onClick={this._onClick}>
        {count}
      </div>
    )
  }
}

export default connect((state) => ({ count: state }))(SubApp);