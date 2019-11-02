import Head from 'next/head'

import Layout from '../layout/MainLayout'

// Components
import Toaster from '../components/Toaster/Toaster';
import Search from '../components/Search/Search';

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

        <Toaster item={props.toast} />

        <Search items={props.cars} />
        
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
    toast: state.carR.toast
  }
};

export default connect(
    mapStateToProps, 
    null
)(Category);