import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Typography,
  isWidthUp,
  withWidth
} from "@material-ui/core";
import {
  BarChart,
  Build,
  CalendarToday,
  Cancel,
  Cloud,
  Code,
  Computer,
  HeadsetMic,
  Message
} from "@material-ui/icons";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Design and Build Code",
    text:
      "More than 10 years of experience programming in different languages to serve clients on an array of different projects.",
    icon: <Build style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#C51162",
    headline: "Full Stack Development",
    text:
      "Experienced in programming front-end and back-end code, along with database implementations and application development.",
    icon: <Code style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#DD2C00",
    headline: "Data Analytics",
    text:
      "Used and created various data analytics platforms, along with creating analysis pipelines for use with existing software.",
    icon: <BarChart style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Hardware Support",
    text:
      "Capable of designing, building, and repairing hardware as needed. Able to perform data backup and recovery when required.",
    icon: <Computer style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#304FFE",
    headline: "Cloud Migration",
    text:
      "Moved numerous systems from inhouse baremetal to cloud hosting software to aid in cost reduction and code portability.",
    icon: <Cloud style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "Product Support",
    text:
      "Can support the product as needed from idea creation, to build, to deployment, and customer or team support when needed.",
    icon: <HeadsetMic style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  },
  {
    color: "#6200EA",
    headline: "Timely Implementation",
    text:
      "Customers can expect a timely completion to meet their project deadlines. Full implmentation is provided on project completion.",
    icon: <CalendarToday style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Clear Communication",
    text:
      "Constant and clear communication is provided through the duration of the contract to assure that you recieve the maximum benefits.",
    icon: <Message style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "Easy Closing",
    text:
      "Simple hand off process upon contact completion to make a smooth transition of project ownership to your team.",
    icon: <Cancel style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <Box pt={10} className="container-fluid" style={{ backgroundColor: "#FFFFFF" }}>
      <Box mb={6}>
        <Typography variant="h3" align="center">
          Features
        </Typography>
      </Box>
      <Box className="container-fluid">
        <Grid container spacing={calculateSpacing(width)}>
          {features.map(element => (
            <Grid
              item
              xs={6}
              md={4}
              data-aos="zoom-in-up"
              data-aos-delay={
                isWidthUp("md", width) ? element.mdDelay : element.smDelay
              }
              key={element.headline}
            >
              <FeatureCard
                Icon={element.icon}
                color={element.color}
                headline={element.headline}
                text={element.text}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
