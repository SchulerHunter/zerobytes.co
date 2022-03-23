import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Box,
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  }
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <Box pt={10} style={{ backgroundColor: "#FFFFFF" }}>
      <Box mb={6}>
        <Typography variant="h3" align="center">
          Pricing
        </Typography>
      </Box>
      <Box className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="The Quick and Easy"
              pricing={
                <span>
                  $35
                  <Typography display="inline"> / hour*</Typography>
                </span>
              }
              features={["Great for code review", "Pay as you need", "Constant communication"]}
            />
            <Typography variant="subtitle2">*4 hour minimum</Typography>
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              title="The Daily Deal"
              pricing={
                <span>
                  $250
                  <Typography display="inline"> / day</Typography>
                </span>
              }
              features={["Reviews and consulations", "Hardware and software", "Perfect for short projects"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="The Startup Special"
              pricing={
                <span>
                  $7,500
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Scrums and sprints", "Early finish product support", "Great for startups"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <PriceCard
              title="Part of the Team"
              pricing={
                <span>
                  $85,000
                  <Typography display="inline"> / year</Typography>
                </span>
              }
              features={["Full product support", "Supports idea to launch", "Acting member in team"]}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
