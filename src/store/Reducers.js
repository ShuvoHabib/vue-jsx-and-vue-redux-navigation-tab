import * as types from './constants';

export default function (state, action) {
    switch(action.type) {
        case types.CHANGE_TAB:
            console.log('Working');
            return {
                activeTab: action.activeTab
            };
        default:
            return state;
    }
};