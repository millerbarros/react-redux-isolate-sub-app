import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './store'

import App from './SubApp'

export default class SubApp extends Component {
  constructor(props) {
    super(props)
    this.store = store
    // this.store.subscribe(() => this.setState({ ...this.state }))
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}