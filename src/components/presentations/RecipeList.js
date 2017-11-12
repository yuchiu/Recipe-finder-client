import React from 'react'
import Recipe from './Recipe'

class RecipeList extends React.Component {


  render() {
    let id = 0;
    return (
      <ul id="recipe-list-container">
        {this
          .props
          .recipeList
          .recipeList
          .map((recipe, i) => {
            id++
            return (<Recipe key={id} recipe={recipe} />)
          })}
      </ul>
    )
  }
}

export default RecipeList;
