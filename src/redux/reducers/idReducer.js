import { combineReducers } from 'redux';

const currentIdReducer = (state = '', action) => {
    console.log('in incidentId', action);

    switch (action.type) {
        case 'GET_CURRENT_ID':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    currentIdReducer,
});
