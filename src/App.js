import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Header, Menu } from 'semantic-ui-react'

import AppHeader from './components/AppHeader'
import Home from './pages/Home'
import Purchases from './pages/Purchases'
import Nominator from './pages/Nominator'

export default function App() {
  return (
    <Router>
      <Container>
        <AppHeader />
        {/* switch through routes */}
        <Switch>
          <Route path="/purchases">
            <Purchases />
          </Route>
          <Route path="/nominator">
            <Nominator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
