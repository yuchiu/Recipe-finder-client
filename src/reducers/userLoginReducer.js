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
            console.log('inside reducer login' + action.payload)
            return newState
            break;
        case constants.LOGOUT:
            newState['username'] = action.payload.username
            newState['message'] = action.payload.message
            console.log('inside reducer logout' + action.payload)
            return newState
            break;
        case constants.FETCH_ERROR:
            console.log('inside fetch error')
            return newState
            break;
        default:
        console.log('initial state' +JSON.stringify(state))
            return state
    }
}