import toggleReducer from './toggleReducer'
import usersReducer from './usersReducers'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  toggle: toggleReducer,
  members: usersReducer,
})

export default allReducers
