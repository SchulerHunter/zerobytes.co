import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import FeatureSection from "./featureSection/FeatureSection";
import HeadSection from "./headSection/HeadSection";
import PricingSection from "./pricingSection/PricingSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
      <PricingSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
