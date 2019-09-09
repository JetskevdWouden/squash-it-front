import {SET_SQUASHERS} from '../actions/squasher';

const initialState = []

export default function(state = initialState, action = {}) {
    switch(action.type) {
        case SET_SQUASHERS:
            console.log("IM RUNNING 5")
            return action.payload
        default:
            return state
    }
}