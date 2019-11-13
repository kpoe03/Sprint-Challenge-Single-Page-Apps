import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import './R&M.css'


export default function TabNav(props) {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => {
    return (
      setActiveItem(name),
      props.history.push(`/${name}`)
    )
  }
  return (
    <Menu attached='top' tabular>
      <Menu.Item className="nav-item"
        name='homepage'
        active={activeItem === 'homepage'}
        onClick={handleItemClick}
      >
      <Icon name='home' size='large'/>Home Page
      </Menu.Item>

      <Menu.Item className="nav-item"
        name='characters'
        active={activeItem === 'characters'}
        onClick={handleItemClick}
      >
      <Icon name='users' size='large' />Characters
      </Menu.Item>

      <Menu.Item className="nav-item"
        name='locations'
        active={activeItem === 'locations'}
        onClick={handleItemClick}
      >
      <Icon name='map outline' size='large' />Locations
      </Menu.Item>

      <Menu.Item className="nav-item"
        name='episodes'
        active={activeItem === 'episodes'}
        onClick={handleItemClick}
      >
      <Icon name='video camera' size='large' />Episodes
      </Menu.Item>
    </Menu>
  )
};