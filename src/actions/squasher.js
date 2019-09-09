import * as request from 'superagent';
//import baseUrl from '../constants';

export const SET_SQUASHERS = 'SET_SQUASHERS';

const baseUrl = `http://localhost:5000`

function setSquashers(squashers) {
    console.log("IM RUNNING 2")
    return {
        type: SET_SQUASHERS,
        payload: squashers
    }
}

export const getSquashers = () => {
    console.log("IM RUNNING 1")
    const url = `${baseUrl}/squashers`
    return (
        async function(dispatch){
            const response = await request(url)
            const squashers = response.body.squashers
            dispatch(setSquashers(squashers))
        }
    )
}