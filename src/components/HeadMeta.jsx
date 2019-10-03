import React from 'react';
import {Helmet} from 'react-helmet';
import favicon from '../static/images/favicon.png';

const HeadMeta = ({title, children}) => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="app_name" content="OG World" />
    <meta name="author" content="Bruno Edoh" />
    <link rel="icon" type="image/png" href={`${favicon}`} />
    <title>{title}</title>
    {children ? children : null}
  </Helmet>
);

export default HeadMeta;
