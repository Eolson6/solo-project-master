import { combineReducers } from 'redux';

const factReducer = (state = [], action) => {
    console.log('in incidentItem');

    switch (action.type) {
        case 'FACT_REDUCER':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    factReducer,
});
