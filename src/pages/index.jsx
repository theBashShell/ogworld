import React from "react";
import Helmet from "../components/meta/Helmet";
import Page from "../components/page/Page";
import IndexTop from "../components/index/IndexTop";
import IndexContent from "../components/index/IndexContent";
import Navbar from "../components/nav/Navbar";
import IndexFooter from "../components/index/IndexFooter";
import OGPartners from "../components/og/OGPartners";
import "swiper/css/swiper.min.css";
import OGProjects from "../components/og/OGProjects";
import OGTeam from "../components/og/OGTeam";

const index = () => {
  return (
    <>
      <Helmet>
        <title>OG World | Opening Ghana to the World</title>
      </Helmet>
      <Navbar page="/#" />
      <IndexTop />
      <IndexContent />
      <OGProjects />
      <OGTeam />
      <OGPartners />
      <IndexFooter />
    </>
  );
};

export default index;
