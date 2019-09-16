import Head from 'next/head'

import React from 'react';

import { connect } from 'react-redux';

import { useRouter } from 'next/router'
import Markdown from 'react-markdown'
import Layout from '../../layout/MainLayout'

class CarId extends React.Component {
  render() {
    const router = useRouter()
    
    return (
      <div>
        <Head>
          <title>@FRmodelcars - Mes préférés</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout>
          <h1>{router.query.reference}</h1>
          <div className="markdown">
            <Markdown
              source={`
  This is our blog post.
  Yes. We can have a [link](/link).
  And we can have a title as well.
  
  ### This is a title
  
  And here's the content.
        `}
            />
          </div>
          <style jsx global>{`
          .markdown {
            font-family: 'Arial';
          }
  
          .markdown a {
            text-decoration: none;
            color: blue;
          }
  
          .markdown a:hover {
            opacity: 0.6;
          }
  
          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}</style>
        </Layout>
      </div>
    )
  }
}

export default connect(
  state => state,
  // actions
)(CarId);
