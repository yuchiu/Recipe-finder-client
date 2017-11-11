import React from 'react'
import Search from '../presentations/Search'
import Recipes from '../presentations/Recipes'
import actions from '../../actions'
import {connect} from 'react-redux'

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Search fetchSearch = {this.props.fetchSearch}/>
        <Recipes recipeList = {this.props.recipeList}/>
      </div>

    )
  }
}
const stateToProps = (state)=>{
  return {recipeList : state.recipeList}
}

const dispatchToProps = (dispatch)=>{
  return {
    fetchSearch : (searchTerm)=>{
      dispatch(actions.fetchSearch(searchTerm))
    }
  }
}



export default connect(stateToProps, dispatchToProps)(Layout);
