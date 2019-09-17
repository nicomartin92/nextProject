import Head from 'next/head'

import React from 'react';
import Layout from '../../layout/MainLayout'
import { withRouter } from 'next/router'

import { connect } from 'react-redux';

import Markdown from 'react-markdown'

class CarId extends React.Component {
  render() {
    const { router } = this.props
    const selectedCar = this.props.carR.cars.filter(car => car.reference === router.query.id)
    const otherModels = this.props.carR.cars.filter(car => car.brand === selectedCar[0].brand)

    console.warn('other models ', otherModels);
    
    return (
      <div>
        <Head>
          <title>@FRmodelcars - {selectedCar[0].brand} {selectedCar[0].model} {selectedCar[0].version}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout
          title="FrModelcar - page de catégorie"
          itemPanel={this.props.carR.cars}>
          <p>This is the model page {router.query.id}</p>
          <h1>{selectedCar[0].brand} {selectedCar[0].model} {selectedCar[0].version}</h1>
        </Layout>
      </div>
    )
  }
}

export default withRouter(connect(
  state => state,
  // actions
)(CarId))
