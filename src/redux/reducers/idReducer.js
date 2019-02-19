import { combineReducers } from 'redux';

const currentIdReducer = (state = '', action) => {
    console.log('in incidentId', action);

    switch (action.type) {
        case 'OPEN_ID':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    currentIdReducer,
});
