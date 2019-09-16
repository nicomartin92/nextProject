import Layout from '../layout/MainLayout'

import { connect } from 'react-redux';

/* Styles */
import '../styles/index.scss'

class Whishlits extends React.Component {
  render() {
    return (
      <Layout itemPanel={this.props.carR.cars}>
        <p>This is the Whishlits page</p>
      </Layout>
    )
  }
}

export default connect(
  state => state,
  // actions
)(Whishlits);
