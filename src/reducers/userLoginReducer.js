import constants from '../constants'

let initialState = {
        username: 'none',
        message: null
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case constants.LOGIN:
            newState['username'] = action.payload.username
            newState['message'] = action.payload.message
            return newState
            break;
        case constants.LOGOUT:
            newState['username'] = action.payload.username
            newState['message'] = action.payload.message
            return newState
            break;
        case constants.FETCH_ERROR:
            return newState
            break;
        default:
            return state
    }
}