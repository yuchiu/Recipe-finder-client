import constants from '../constants'
import axios from 'axios'

const URL="https://api.edamam.com/search"
const APP_ID="225d77e1"
const API_KEY="f99c931d2d656a349da642ed1037973f	"

export default {
    fetchSearch: (searchTerm)=>{
        return async (dispatch)=>{
            try{
                const response = await axios.get(`${URL}?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}`)
                const data = response.hits
                dispatch({
                    type: constants.FETCH_SEARCH,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type: constants.FETCH_ERROR,
                    payload : error
                })
            }
        }
    }
}