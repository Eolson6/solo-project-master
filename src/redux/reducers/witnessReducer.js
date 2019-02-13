import { combineReducers } from 'redux';

const witnessReducer = (state = {}, action) => {
    console.log('in incidentItem');

    switch (action.type) {
        case 'ADD_WITNESS_REDUCER':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    witnessReducer,
});
