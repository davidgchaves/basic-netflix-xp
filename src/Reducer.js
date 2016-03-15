import { INITIAL_STATE, SET_SEARCH_TERM } from './Constants'

export default (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {...prevState, searchTerm: action.payload}
    default:
      return prevState
  }
}
