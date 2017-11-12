import React from 'react'


class Recipe extends React.Component {


  render() {

    const recipe = this.props.recipe.recipe
    console.log(recipe)
    return (
      <div className="recipe-container">
        <img className="recipe-img" src={recipe.image} />
        <h1 className="recipe-label recipe-ele">{recipe.label}</h1>
        <p className="recipe-by recipe-ele">by <a className="recipe-link" target="_blank" href={recipe.url}>{recipe.source}</a></p>
        <p className="recipe-health recipe-ele">{recipe.healthLabels}</p>
        {/* <p>{recipe.ingredients.text}</p>
          <p>{recipe.ingredients.weight}</p> */}
        <p className="recipe-calories recipe-ele">calories: {recipe.calories}</p>
      </div>

    )
  }
}

export default Recipe;
