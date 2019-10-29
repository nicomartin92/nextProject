import Head from 'next/head'

import Layout from '../layout/MainLayout'

import { connect } from 'react-redux';
import { 
  getALLCars, 
  getFrenchCars 
} from '../store/selectors/selectors';

// ACTIONS
import {
  addFavorite
} from '../store/actions/actions';

import Search from '../components/Search/Search';

class Category extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>@FRmodelcars - page de catégorie</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout
          title="FrModelcar - page de catégorie"
          carItems={this.props.cars}>

          <Search items={this.props.cars} />
          
          <p>This is the List page</p>
          
        </Layout>
      </div>
    )
  }
}

/* export default connect(
  state => state,
  // actions
)(Category); */

const mapStateToProps = (state) => {
  return {
    allCars: getALLCars(state),
    allFrench: getFrenchCars(state),
    cars: state.carR.cars
  }
};

export default connect(
    mapStateToProps, 
    null
)(Category);