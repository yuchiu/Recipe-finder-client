import constants from '../constants'

let initialState = {
    recipeList: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case constants.FETCH_SEARCH:
            newState['recipeList'] = action.payload
            return newState
            break;
        case constants.FETCH_ERROR:
        console.log('inside fetch error')
            return newState
            break;
        default:
            return state
    }
}