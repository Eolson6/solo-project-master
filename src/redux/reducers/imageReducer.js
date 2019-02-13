import { combineReducers } from 'redux';

const imageReducer = (state = {}, action) => {
    console.log('in incidentItem');

    switch (action.type) {
        case 'ADD_IMAGE_REDUCER':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    imageReducer,
});
