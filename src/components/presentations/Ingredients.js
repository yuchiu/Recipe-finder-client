import React from 'react'


class Ingredients extends React.Component {


  render() {

    return (
      <div className="ingredients-container"> {this.props.ingredients.text}</div>

    )
  }
}

export default Ingredients;