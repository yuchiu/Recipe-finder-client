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

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchSearch(this.state.newSearch.ingredients)

  }
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this
            .handleChange
            .bind(this)}
            value={this.state.newSearch.ingredients}/>
          <button
            onSubmit={this
            .handleSubmit
            .bind(this)}
            type="submit">Find</button>
        </form>
      </div>
    )
  }
}

export default Search;
