import React from "react";
import { withRouter } from "react-router";

class MemorialIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    this.props.fetchMemorials();
  }

  formatDate(date) {
    return new Date(date).toDateString();
  }

  sortByDate(memorialArray) {
    const sortedMemorialDatesArray = memorialArray.map(memorial => ({
      creationDate: memorial.creationDate,
      deceased: memorial.name.last + ", " + memorial.name.first
    }));

    sortedMemorialDatesArray.sort((a, b) => (a.creationDate > b.creationDate) ? 1 : -1);

    return sortedMemorialDatesArray.map(memorial => (
      <li>
        Memorial Creation Date: {this.formatDate(memorial.creationDate) + "   "}
        <br/>
        Name (Last Name First): {memorial.deceased}
      </li>
    ));

  }

  render() {
    if (this.props.memorials.length === 0) {
      return <span>"Loading Fam..."</span>;
    }

    const memorialSortedByDate = this.sortByDate(this.props.memorials[0]);

    return <ul>{memorialSortedByDate}</ul>;
  }
}

export default withRouter(MemorialIndex);
