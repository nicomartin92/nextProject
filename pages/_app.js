import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/index';

// REDUX PERSIST
import { PersistGate } from 'redux-persist/integration/react';

// import '../styles/index.scss';

export default withRedux(initStore, { debug: false })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <PersistGate persistor={store.__PERSISTOR} loading={null}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      );
    }
  }
);