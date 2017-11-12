import constants from '../constants'
import axios from 'axios'

const URL = "https://api.edamam.com/search"
const APP_ID = "225d77e1"
const API_KEY = "f99c931d2d656a349da642ed1037973f"

const backendAPI = "http://localhost:1234"

let actions = {
    fetchSearch: (searchTerm) => {
        return async(dispatch) => {
            try {
                const response = await axios.get(`${URL}?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}`)
                dispatch({
                    type: constants.FETCH_SEARCH,
                    payload: response.data.hits
                })
            } catch (error) {
                dispatch({
                    type: constants.FETCH_ERROR,
                    payload: error
                })
            }
        }
    }, //fetchsearch
    register: (info) => {
        return async(dispatch) => {
            try {
                const response = await axios.post(`${backendAPI}/register`, info)
                if (response.data) {

                    dispatch(actions.login(response.data))
                }
            } catch (error) {
                dispatch({
                    type: constants.FETCH_ERROR,
                    payload: error
                })
            }
        }
    }, //register
    login: (info) => {
        return (dispatch) => {
            try {
                dispatch({
                    type: constants.LOGIN,
                    payload: info
                })
            } catch (error) {
                dispatch({
                    type: constants.FETCH_ERROR,
                    payload: error
                })
            }
        }
    }, //login
    logout: () => {
        return (dispatch) => {
            try {
                data = {
                    username: 'none',
                    message: null
                }
                dispatch({
                    type: constants.LOGOUT,
                    payload: data
                })
            } catch (error) {
                dispatch({
                    type: constants.FETCH_ERROR,
                    payload: error
                })
            }
        }
    }, //logout
}
export default actions