import React from 'react';
import {graphql} from 'gatsby';
import HeadMeta from '../components/HeadMeta';
import IndexHead from '../components/IndexHead';
import IndexContent from '../components/IndexContent';
import IndexFooter from '../components/IndexFooter';
import {Provider} from 'react-redux';
import {store} from '../util/globalState';

const HomePage = ({data}) => (
  <>
    <HeadMeta title={data.site.siteMetadata.title} />
    <div id="ogworld_app">
      <Provider store={store}>
        <IndexHead />
        <IndexContent />
        <IndexFooter />
      </Provider>
    </div>
  </>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export default HomePage;
