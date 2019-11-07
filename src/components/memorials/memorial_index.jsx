import React from 'react';
import { withRouter } from "react-router";

class MemorialIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMemorials();
  }

  render() {
    if (this.props.memorials.length === 0) {
      return <span>"Loading Fam..."</span>;
    }
    // debugger;
    const memorialArray = this.props.memorials[0].map( memorial => (
      <li key={memorial._id}>{new Date(memorial.creationDate).toDateString()}</li>
    ))

    return (
    <ul>
      {memorialArray}
    </ul>)
  }
}


export default withRouter(MemorialIndex);