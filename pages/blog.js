import React from 'react'
import Prismic from 'prismic-javascript'
import { Date, Link, RichText } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

const Blog = props => (
  <div>
    <img src={props.home.data.image.url} alt="avatar image" />
    <h1>{RichText.asText(props.home.data.headline)}</h1>
    <p>{RichText.asText(props.home.data.description)}</p>
  </div>
)

Blog.getInitialProps = async context => {
  const home = await client.getSingle('frmodelcars')

  return { home }
}

export default Blog