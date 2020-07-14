import * as actions from '../types'

const initialState = {
  addMembersModal: false,
}

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODAL_PLUS:
      return {
        ...state,
        addMembersModal: !state.addMembersModal,
      }

    default:
      return state
  }
}

export default toggleReducer
