import Head from 'next/head'

import React from 'react';
import Layout from '../../layout/MainLayout'
import { withRouter } from 'next/router'
import Markdown from 'react-markdown'

import { connect } from 'react-redux'

class CarId extends React.Component {
  render() {
    const { router } = this.props
    const selectedCar = this.props.carR.cars.filter(car => car.reference === router.query.id)
    const otherModels = this.props.carR.cars.filter(car => car.brand === selectedCar[0].brand)
    const otherModelsExcluded = otherModels.filter(car => car.reference !== selectedCar[0].reference)

    // console.warn('other models ', otherModels);
    // console.warn('other models ', otherModelsExcluded);

    return (
      <div>
        <Head>
          <title>@FRmodelcars - {selectedCar[0].brand} {selectedCar[0].model} {selectedCar[0].version}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout
          title="FrModelcar - page de catégorie"
          carItems={this.props.carR.cars}>
          <p>This is the model page {router.query.id}</p>

          <div className="pdp">
            <h3>Modèle: {selectedCar[0].brand} {selectedCar[0].model} {selectedCar[0].version}</h3>
            
            <div className="textBlock">
              <div className="textBlock__text">
                <h2 className="textBlock__subLabel">
                  {selectedCar[0].brandShop}
                </h2>
                <h1 className="textBlock__label">
                  {selectedCar[0].brand} {selectedCar[0].model}
                </h1>
                <h3 className="textBlock__version">
                  {selectedCar[0].version}
                </h3>
                <span className="textBlock__year">{selectedCar[0].year}</span>
              </div>
              <div className="textBlock__image">
                <img src={`/static${selectedCar[0].image}`} loading="lazy" alt="" />
              </div>
            </div>

            <div className="imageContent">
              <div className="imageContent__item -medium">
                <img src={`/static${selectedCar[0].views[0].image1}`} loading="lazy" alt="" />   
              </div>
              <div className="imageContent__item -small">
                <div className="textContent">
                  <h3 className="subTitle">
                    Détails
                  </h3>
                  <p className="textContent__description">
                    {selectedCar[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="imageContent">
              <div className="imageContent__item -small">
                <div className="textContent">
                  <h3 className="subTitle">
                    Caractéristiques
                  </h3>
                  <ul className="specs">
                    <li className="specs__item">
                      <span>Référence:</span>
                      <span>{selectedCar[0].reference}</span>
                    </li>
                    <li className="specs__item">
                      <span>Producteur:</span>
                      <span>{selectedCar[0].brandshop}</span>
                    </li>
                    <li className="specs__item">
                      <span>Marque:</span>
                      <span>{selectedCar[0].brand}</span>
                    </li>
                    <li className="specs__item">
                      <span>Modèle:</span>
                      <span>{selectedCar[0].model}</span>
                    </li>
                    <li className="specs__item">
                      <span>Version:</span>
                      <span>{selectedCar[0].version}</span>
                    </li>
                    <li className="specs__item">
                      <span>Année:</span>
                      <span>{selectedCar[0].year}</span>
                    </li>
                    <li className="specs__item">
                      <span>Couleur:</span>
                      <span>
                        <span className="skew" />
                        {selectedCar[0].colorname}
                      </span>
                    </li>
                  </ul>  
                </div>
              </div>
              <div className="imageContent__item -medium">
                <img src={`/static${selectedCar[0].views[0].image2}`} loading="lazy" alt="carsData[0].model" />   
              </div>
            </div>        
          </div>
        </Layout>
      </div>
    )
  }
}

export default withRouter(connect(
  state => state,
  // actions
)(CarId))
