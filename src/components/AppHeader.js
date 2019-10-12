import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Menu } from 'semantic-ui-react'

export default class AppHeader extends Component {
  state = {}

  handleLinkClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div style={{ marginTop: 20 }}>
        <Header as="h1">NetOps</Header>
        <Menu>
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleLinkClick}
              as="span"
            >
              Home
            </Menu.Item>
          </Link>
          <Link to="/purchases">
            <Menu.Item
              name="purchases"
              active={activeItem === 'purchases'}
              onClick={this.handleLinkClick}
              as="span"
            >
              Purchases
            </Menu.Item>
          </Link>
          <Link to="/nominator">
            <Menu.Item
              name="nominator"
              active={activeItem === 'nominator'}
              onClick={this.handleLinkClick}
              as="span"
            >
              Nominator
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    )
  }
}
