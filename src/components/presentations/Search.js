import React from 'react'

class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      newSearch: {
        ingredients: ''
      }
    }
  }
  handleChange(e) {
    this.setState({
      newSearch: {
        ingredients: e.target.value
      }
    })
  }

  handleSearch(e) {
    e.preventDefault()
    this.props.fetchSearch(this.state.newSearch.ingredients)

  }
  render() {
    return (
      <div id="search-container">
      <h1 id="search-banner-title">Find Recipe!</h1>
        <form id="search-form">
          <input id="search-input" 
            onChange={this
            .handleChange
            .bind(this)}
            value={this.state.newSearch.ingredients}
            placeholder="ingredients..."/>
          <button id="search-btn" 
            onClick={this
            .handleSearch
            .bind(this)}
            type="submit">Find</button>
        </form>
      </div>
    )
  }
}

export default Search;
