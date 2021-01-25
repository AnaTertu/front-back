import{ CLICK_UPDATE_VALUE } from '../actions/actionTypes';

export const clickButton = value => ({ 
    type: CLICK_UPDATE_VALUE, 
    newValue: value 
}); 
