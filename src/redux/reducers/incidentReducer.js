import { combineReducers } from 'redux';

const incidentReducer = (state = [], action) => {
    console.log('in incidentItem');

    switch (action.type) {
        case 'INCIDENT_REDUCER':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    incidentReducer,
});
