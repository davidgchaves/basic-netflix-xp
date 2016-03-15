import { connect } from 'react-redux'

import { SET_SEARCH_TERM } from './Constants'

const mapStateToProps = ({ searchTerm }) => ({ searchTerm })

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (term) =>
    dispatch({ type: SET_SEARCH_TERM, payload: term })
})

export default connect(mapStateToProps, mapDispatchToProps)
