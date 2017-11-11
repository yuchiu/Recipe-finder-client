import React from 'react'
import Header from '../presentations/Header/'
import Search from '../presentations/Search'
import RecipeList from '../presentations/RecipeList'
import actions from '../../actions'
import { connect } from 'react-redux'

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Search fetchSearch={this.props.fetchSearch} />
        <RecipeList recipeList={this.props.recipeList} />
      </div>

    )
  }
}
const stateToProps = (state) => {
  return { recipeList: state.recipeList }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchSearch: (searchTerm) => {
      dispatch(actions.fetchSearch(searchTerm))
    }
  }
}



export default connect(stateToProps, dispatchToProps)(Layout);
