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
        <Header currentUser={this.props.currentUser} register={this.props.register} login={this.props.login} logout={this.props.logout}/>
        <Search fetchSearch={this.props.fetchSearch} />
        {this.props.currentUser ?<div>{this.props.currentUser.currentUser}{this.props.currentUser.message}</div>:null}
        <RecipeList recipeList={this.props.recipeList} currentUser={this.props.currentUser} />
      </div>

    )
  }
}
const stateToProps = (state) => {
    return { recipeList: state.recipeList, currentUser: state.currentUser }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchSearch: (searchTerm) => {
      dispatch(actions.fetchSearch(searchTerm))
    },
    register: (info) => {
      dispatch(actions.register(info))
    },
    login: (info) => {
      dispatch(actions.login(info))
    },
    logout: () => {
      dispatch(actions.logout())
    }
  }
}



export default connect(stateToProps, dispatchToProps)(Layout);
