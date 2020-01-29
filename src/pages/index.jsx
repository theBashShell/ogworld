import React from "react";
import Helmet from "../components/meta/Helmet";
import Page from "../components/page/Page";
import IndexTop from "../components/index/IndexTop";
import IndexContent from "../components/index/IndexContent";
import Navbar from "../components/nav/Navbar";
import IndexFooter from "../components/index/IndexFooter"

const index = () => {
  return (
    <>
      <Helmet>
        <title>OG World | Opening Ghana to the World</title>
      </Helmet>
      <Navbar page="/#" />
      <Page>
        <IndexTop />
        <IndexContent />
        <IndexFooter />
      </Page>
    </>
  );
};

export default index;
