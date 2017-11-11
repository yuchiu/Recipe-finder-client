import React from 'react'
import Recipe from './Recipe'

class Recipes extends React.Component {

  
  render() {
    console.log('inside Recipe Component'+ this.props.recipeList.recipeList);
    let id = 0;
    return (
      <ul>
        {this
          .props
          .recipeList
          .recipeList
          .map((recipe, i) => {
            id++
            return (<Recipe key={id} recipe={recipe}/>)
          })}
      </ul>
    )
  }
}

export default Recipes;
