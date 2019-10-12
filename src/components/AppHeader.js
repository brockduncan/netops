import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Menu } from 'semantic-ui-react'

export default function AppHeader() {
  return (
    <div style={{ marginTop: 20 }}>
      <Header as="h1">NetOps</Header>
      <Menu>
        <Link to="/">
          <Menu.Item name="home">Home</Menu.Item>
        </Link>
        <Link to="/purchases">
          <Menu.Item name="purchases">Purchases</Menu.Item>
        </Link>
        <Link to="/nominator">
          <Menu.Item name="nominator">Nominator</Menu.Item>
        </Link>
      </Menu>
    </div>
  )
}
