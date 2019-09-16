import Layout from '../layout/MainLayout'

import { connect } from 'react-redux';

/* Styles */
import '../styles/index.scss'

class Status extends React.Component {
  render() {
    return (
      <Layout itemPanel={this.props.carR.cars}>
        <p>This is the Status page</p>
      </Layout>
    )
  }
}

export default connect(
  state => state,
  // actions
)(Status);
