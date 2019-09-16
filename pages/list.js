import Layout from '../layout/MainLayout'

import { connect } from 'react-redux';

/* Styles */
import '../styles/index.scss'

class List extends React.Component {
  render() {
    return (
      <Layout 
        title="FrModelcar - page de catégorie" 
        itemPanel={this.props.carR.cars}>
        <p>This is the List page</p>
      </Layout>
    )
  }
}

export default connect(
  state => state,
  // actions
)(List);