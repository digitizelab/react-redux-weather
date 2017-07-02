import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //Never manipulate the state
            //state.concat = doesn't change the existing array,
            //creates a new array that contains old & new stuff
            return [action.payload.data, ...state];
    }
    return state;
}