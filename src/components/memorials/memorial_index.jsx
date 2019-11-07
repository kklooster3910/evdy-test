import React from "react";
import { withRouter } from "react-router";

class MemorialIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedMemorials: null
    };
    this.sortByLastName = this.sortByLastName.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  componentDidMount() {
    this.props.fetchMemorials();
  }

  componentDidUpdate() {
    if (!this.state.sortedMemorials) this.sortByDate(this.props.memorials[0]);
  }

  formatDate(date) {
    return new Date(date).toDateString();
  }

  sortByDate() {
    const sortedMemorialDatesArray = this.props.memorials[0].map(memorial => ({
      _id: memorial._id,
      creationDate: memorial.creationDate,
      deceased: memorial.name.last + ", " + memorial.name.first
    }));

    sortedMemorialDatesArray.sort((a, b) =>
      a.creationDate > b.creationDate ? 1 : -1
    );
    const newState = {};
    newState.sortedMemorials = sortedMemorialDatesArray.map(memorial => (
      <li key={memorial._id}>
        Memorial Creation Date: {this.formatDate(memorial.creationDate) + " "}
        <br />
        Name (Last Name First): {memorial.deceased}
      </li>
    ));
    this.setState(newState);
  }

  sortByLastName() {
    const sortedMemorialNamesArray = this.props.memorials[0].map(memorial => ({
      _id: memorial._id,
      creationDate: memorial.creationDate,
      deceased: memorial.name.last + ", " + memorial.name.first
    }));

    sortedMemorialNamesArray.sort((a, b) => (a.deceased > b.deceased ? 1 : -1));
    const newState = {};
    newState.sortedMemorials = sortedMemorialNamesArray.map(memorial => (
      <li key={memorial._id}>
        Memorial Creation Date: {this.formatDate(memorial.creationDate) + " "}
        <br />
        Name (Last Name First): {memorial.deceased}
      </li>
    ));
    this.setState(newState);
  }

  render() {
    if (this.props.memorials.length === 0) return <span>"Loading Fam..."</span>;

    return (
      <div>
        <ul>{this.state.sortedMemorials}</ul>
        <button onClick={() => this.sortByLastName()}>Sort By Last Name</button>
        <br />
        <br />
        <button onClick={() => this.sortByDate()}>
          Sort By Date (default)
        </button>
      </div>
    );
  }
}

export default withRouter(MemorialIndex);
