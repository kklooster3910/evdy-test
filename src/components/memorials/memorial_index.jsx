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
    this.props.fetchMemorials().then(() => {
      this.props.resetErrors();
    });
  }
  
  componentDidUpdate() {
    if (!this.state.sortedMemorials) this.memorialSort("creationDate");
  }
  
  formatDate(date) {
    return new Date(date).toDateString();
  }
  
  createMemorialArray() {
    return this.props.memorials[0].map(memorial => ({
      _id: memorial._id,
      creationDate: memorial.creationDate,
      firstName: !memorial.name.first ? "" : memorial.name.first,
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
    if (!this.props.memorials.length) return null;

    return (
      <div className="memorial-sort-container">
        <h1 className="memorial-sort-header">Memorial Sort</h1>
        <div className="memorial-sort-button-container">
          <button
            id="button"
            className="sortby-lastName-button"
            onClick={() => this.memorialSort("lastName")}
          >
            Sort By Last Name
          </button>
          <div className="line-to-toggle"> | </div>
          <button
            id="button"
            className="sortby-date-button"
            onClick={() => this.memorialSort("creationDate")}
          >
            Sort By Date Created
          </button>
          <div className="line-to-toggle"> | </div>
          <button
            id="button"
            className="sortby-firstName-button"
            onClick={() => this.memorialSort("firstName")}
          >
            Sort By First Name
          </button>
        </div>
        <ul className="memorial-sort-ul">
          <li id="table-headers" className="sorted-list-item">
            <p>Created On</p>
            <p>Last Name</p>
            <p>First Name</p>
          </li>
          {this.state.sortedMemorials}
        </ul>
      </div>
    );
  }
}

export default withRouter(MemorialIndex);
