import React from 'react';

var Search = ({ value, handleSearchInputChange }) => (
  // handleInputChange(e) {
  //   // this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  // render() {
  // return (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      value={value}
      onChange={e => {
        handleSearchInputChange(e.target.value);
      }}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" />
    </button>
  </div>
);
// }

export default Search;
