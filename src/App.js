import React, { Component } from "react";

import { connect } from 'react-redux';

import store from './store';

import SubApp from "./SubApp";

import "./App.css";

class BigApp extends Component {
  _onClick = () => store.dispatch({ type: 'INCREMENT' })
  
  render = () => {
    const { count } = this.props

    console.log('App.count:', count);

    return (
      <div className="big-app">
        <div className="counter" onClick={this._onClick}>{count}</div>
        <SubApp />
        <SubApp />
        <SubApp />
      </div>
    )
  }
}

export default connect((state) => ({ count: state }))(BigApp);
