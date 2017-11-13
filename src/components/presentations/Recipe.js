import React from 'react'
import Ingredients from './Ingredients'

class Recipe extends React.Component {


  render() {

    const recipe = this.props.recipe.recipe
    let id =0
    console.log(recipe)
    return (
      <div className="recipe-container">
        <img className="recipe-img" src={recipe.image} />
        <h1 className="recipe-label recipe-ele">{recipe.label}</h1>
        <p className="recipe-by recipe-ele">by <a className="recipe-link" target="_blank" href={recipe.url}>{recipe.source}</a></p>
        <p className="recipe-health recipe-ele">{recipe.healthLabels}</p>

        {recipe
          .ingredients
          .map((ingre, i) => {
            id++
            return (<Ingredients key={id} ingredients={ingre} />)
          })}

        {/* <p>{recipe.ingredients.text}</p>
          <p>{recipe.ingredients.weight}</p> */}
        <p className="recipe-calories recipe-ele">calories: {recipe.calories}</p>
      </div>

    )
  }
}

export default Recipe;
