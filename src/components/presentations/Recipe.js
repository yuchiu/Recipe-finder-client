import React from 'react'


class Recipe extends React.Component {

  
  render() {
      
    const recipe = this.props.recipe.recipe
    console.log(recipe)
    return (
      <div>
          <h1>{recipe.label}</h1>
      </div>

    )
  }
}

export default Recipe;
