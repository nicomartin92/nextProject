import React from 'react';
import { storiesOf } from '@storybook/react';
import Autocomplete from './Autocomplete';

export const carItems = [
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
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  },
  {
    available: 'true',
    image: './cars/renault/renault-clio-4-rs.jpg',
    model: 'Megane 4',
    title: 'title',
    brand: 'renault',
    version: 'rs',
    year: '2019',
    stock: 1,
    id: 1,
    reference: 'G020',
    views: [
      {
        image1: "/cars/peugeot/peugeot-305-gtx-profil.jpg",
        image2: "/cars/peugeot/peugeot-305-gtx-rear.jpg"
      }
    ]
  }
]

const isVisible = true

storiesOf('Autocomplete', module)
  .add('default', () => <Autocomplete items={{ carItems }} isVisible={{ isVisible }} />)