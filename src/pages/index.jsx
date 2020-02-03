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
import OGContact from "../components/og/OGContact";
import OGGallery from "../components/og/OGGallery";
import OGServices from "../components/og/OGServices";

const index = () => {
  return (
    <>
      <Helmet>
        <title>OG World | Opening Ghana to the World</title>
      </Helmet>
      <Navbar page="/#" />
      <IndexTop /> 
      <OGServices />
      <OGProjects />
      <OGTeam />
      <OGPartners />
      <OGContact />
      <OGGallery />
      <IndexFooter />
    </>
  );
};

export default index;
