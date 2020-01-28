import React from "react";
import Helmet from "../components/meta/Helmet";
import Page from "../components/page/Page";
import IndexTop from "../components/index/IndexTop";

const index = () => {
  return (
    <>
      <Helmet>
        <title>OG World | Opening Ghana to the World</title>
      </Helmet>
      <Page>
        <IndexTop />
        <IndexTop />
        <IndexTop />
      </Page>
    </>
  );
};

export default index;
