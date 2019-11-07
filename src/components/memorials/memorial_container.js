import MemorialIndex from './memorial_index';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchMemorials } from "../../actions/memorial_actions";

const mstp = state => ({
  memorials: Object.values(state.memorials)
})

const mdtp = dispatch => ({
  fetchMemorials: () => dispatch(fetchMemorials()),
  // resetErrors: () => dispatch(resetErrors())
})

export default withRouter(connect(mstp, mdtp)(MemorialIndex));