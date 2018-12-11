import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './screens/home'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'

export default class Router extends Component {
  render() {
    const loggedIn = false
    return (
      <BrowserRouter>
        <div>
          { loggedIn
            ? (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={Home} />
                <Redirect to="/" />
              </Switch>
            )
            : (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={Home} />
                <Redirect to="/" />
              </Switch>
            )}
        </div>
      </BrowserRouter>
    )
  }
}
