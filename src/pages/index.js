import React from 'react';
import {graphql} from 'gatsby';
import HeadMeta from '../components/HeadMeta';
import IndexHead from '../components/IndexHead';
import IndexContent from '../components/IndexContent';
import IndexFooter from '../components/IndexFooter';

const HomePage = ({data}) => (
  <>
    <HeadMeta title={data.site.siteMetadata.title} />
    <div className="page">
      <IndexHead />
      <IndexContent />
      <IndexFooter />
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
