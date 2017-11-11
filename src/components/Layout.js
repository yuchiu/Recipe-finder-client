import React from 'react'
import Search from './Search'
import Recipes from './Recipes'

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Search/>
        <Recipes/>
      </div>

    )
  }
}

export default Layout;
