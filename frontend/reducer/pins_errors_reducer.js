import { RECEIVE_PIN_ERRORS } from '../actions/pins_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PIN_ERRORS:
            return [...action.errors];
        default:
            return state;
    }
};