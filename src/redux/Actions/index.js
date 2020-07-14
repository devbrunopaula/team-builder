import * as actions from '../types'

export const modalTogglePlus = () => {
  return {
    type: actions.TOGGLE_MODAL_PLUS,
  }
}

// users

export const fetchUsersRequest = () => {
  return {
    type: actions.FETCH_USERS_REQUEST,
  }
}

export const fetchUserSuccess = (user) => {
  return {
    type: actions.FETCH_USERS_SUCCESS,
    payload: user,
  }
}

export const addUsers = (user) => {
  return {
    type: actions.ADD_USERS,
    payload: user,
  }
}

export const deleteUser = (id) => {
  return {
    type: actions.DELETE_USER,
    payload: id,
  }
}
