import axios from 'axios';

export const getFox = () => {
    return(dispatch) => {
        dispatch(fetchStart());
        axios.get('https://randomfox.ca/floof/')
            .then(res => {
                console.log("response", res)
                dispatch(fetchSuccess(res.data.image));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            });   
    }  
};


export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchStart = () => {
    return({type: FETCH_START});
};

export const fetchSuccess = (fox) => {
    return({type: FETCH_SUCCESS, payload: fox});
};

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
};