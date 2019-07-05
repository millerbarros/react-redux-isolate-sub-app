import React, { Component } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import counter from './store'

import App from './SubApp'

export default class SubApp extends Component {
  constructor(props) {
    super(props)
    this.store = createStore(counter);
    this.store.subscribe(() => console.log('SubApp', this.store.getState()))
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}