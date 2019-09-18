import React from 'react';
import { storiesOf } from '@storybook/react';
import someData from '../../db.json';

import PanelNav from '../../components/PanelNav/PanelNav';

export const carProps = {
  available: 'true',
  image: './cars/renault/renault-clio-4-rs.jpg',
  model: 'Clio 4',
  title: 'title',
  brand: 'renault',
  version: 'rs',
  year: '2017',
  stock: 1,
  id: 1,
  reference: 'G020'
}

export const carProps2 = [
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Clio 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2017',
    stock: 1,
    id: 1,
    reference: 'G020'
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Clio 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2017',
    stock: 1,
    id: 1,
    reference: 'G020'
  }
]

storiesOf('PanelNav', module)
  .add('default', () => <PanelNav items={{ carProps2 }} />)