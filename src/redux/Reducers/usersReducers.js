import * as actions from '../types'

const initialState = {
  loading: false,
  users: [
    {
      id: '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
      name: 'Mary Doe',
      title: 'Graphic Designer',
      email: 'maydoe@gmail.com',
    },
  ],
  error: '',
}

// const users = [
//   {
//     id: 0,
//     name: 'Mary Doe',
//     title: 'Dev ops',

//   },
// ]

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_REQUEST:
      return {
        loading: true,
        users: [...state.users],
      }

    case actions.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: [...state.users, action.payload],
      }

    case actions.ADD_USERS:
      return {
        ...state,
        users: [...state.users, action.payload],
        error: '',
      }
    case actions.DELETE_USER:
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      }

    default:
      return state
  }
}

export default userReducer
