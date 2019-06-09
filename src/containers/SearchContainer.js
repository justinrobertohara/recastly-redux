import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';

const mapStateToProps = state => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: value => dispatch(handleSearchChange(value))
  };
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onChange: () => {
//       handleSearchChange(ownProps.value);
//     }
//   };
// };

var SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)

// export default FilterLink

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
