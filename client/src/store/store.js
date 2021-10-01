import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { phoneWordsReducer } from './reducer';

export const store = createStore(phoneWordsReducer, applyMiddleware(thunk));