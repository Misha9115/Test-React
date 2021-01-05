import { combineReducers } from 'redux';

import prodactAc from './productAc'

const rootReducer = combineReducers({
   
    active :prodactAc,
})

export default rootReducer;