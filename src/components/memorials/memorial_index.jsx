import React from "react";
import { withRouter } from "react-router";
import { MemorialIndexItem } from "./memorial_index_item";

class MemorialIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedMemorials: null
    };
  }

  componentDidMount() {
    this.props.fetchMemorials();
  }

  componentDidUpdate() {
    if (!this.state.sortedMemorials) this.memorialSort("creationDate");
  }

  formatDate(date) {
    return new Date(date).toDateString();
  }

  createMemorialArray() {
    // debugger;
    return this.props.memorials[0].map(memorial => ({
      _id: memorial._id,
      creationDate: memorial.creationDate,
      firstName: memorial.name.first,
      middleName: memorial.name.middle,
      lastName: !memorial.name.last ? "" : memorial.name.last
    }));
  }

  createSortedListItems(sortedMemorialsArray) {
    return sortedMemorialsArray.map(memorial => (
      <MemorialIndexItem
        key={memorial._id}
        formatDate={this.formatDate}
        memorial={memorial}
      />
    ));
  }

  memorialSort(memorialKey) {
    const sortedMemorialArray = this.createMemorialArray();
    sortedMemorialArray.sort((a, b) => {
      if (a[memorialKey] === "" && b[memorialKey] !== "") return 1;
      if (a[memorialKey] !== "" && b[memorialKey] === "") return -1;
      return a[memorialKey] > b[memorialKey] ? 1 : -1;
    });
    const newState = {};
    newState.sortedMemorials = this.createSortedListItems(sortedMemorialArray);
    this.setState(newState);
  }

  render() {
    if (this.props.memorials.length === 0) return <span>"Loading Fam..."</span>;

    return (
      <div className="memorial-sort-container">
        <h1 className="memorial-sort-header">Welcome to Memorial Sort!</h1>
        <div className="memorial-sort-button-container">
          <button
            id="button"
            className="sortby-lastName-button"
            onClick={() => this.memorialSort("lastName")}
          >
            Sort By Last Name
          </button>
          <button
            id="button"
            className="sortby-date-button"
            onClick={() => this.memorialSort("creationDate")}
          >
            Sort By Date (Default)
          </button>
        </div>
        <ul className="memorial-sort-ul">{this.state.sortedMemorials}</ul>
      </div>
    );
  }
}

export default withRouter(MemorialIndex);
