import Head from 'next/head'

import Layout from '../layout/MainLayout'

// Components
import Toaster from '../components/Toaster/Toaster';
import Search from '../components/Search/Search';
import InViewPort from '../components/InViewPort/InViewPort';

import { connect } from 'react-redux';
import {
  getALLCars,
  getFrenchCars
} from '../store/selectors/selectors';

/* export default connect(
  state => state,
  // actions
)(Category); */

const Category = (props) => {

  // const sendToastEvent = React.createRef();

  return (
    <div>
      <Head>
        <title>@FRmodelcars - page de catégorie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout
        title="FrModelcar - page de catégorie"
        carItems={props.cars}>

        <Toaster item={props.activeCar ? props.activeCar : []} />

        <Search items={props.cars} />

        <InViewPort as="span">
          <p>I am a boy</p>
          <p>I am a girl</p>
        </InViewPort>

        <p>This is the List page</p>

      </Layout>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allCars: getALLCars(state),
    allFrench: getFrenchCars(state),
    cars: state.carR.cars,
    activeCar: state.carR.activeCar
  }
};

export default connect(
  mapStateToProps,
  null
)(Category);