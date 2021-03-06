import React from "react";
import PropTypes from "prop-types";
import ParticlesBg from 'particles-bg'
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import ZoomImage from "../../../shared/components/ZoomImage";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  }
});

function HeadSection(props) {
  const { classes, width } = props;
  return (
    <Box pt={12} className={classNames(classes.wrapper)}>
      <Box className={classNames("container-fluid", classes.container)}>
        <ParticlesBg
          type="cobweb"
          num={isWidthUp("lg", width) ? 200 : isWidthUp("sm", width) ? 100 : 50}
          bg={{ width: "100%", height: "100%", position: "absolute", zIndex: "0", top: 0, left: 0, color:"white" }}
        />
        <Box display="flex" justifyContent="center" className="row">
          <Card
            className={classes.card}
            data-aos-delay="200"
            data-aos="zoom-in"
            square={true}
          >
            <Box className={classNames(classes.containerFix, "container")}>
              <Box justifyContent="space-between" className="row">
                <Grid item xs={12} md={5}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                  >
                    <Box mb={4}>
                      <Typography
                        variant={isWidthUp("lg", width) ? "h3" : "h4"}
                      >
                        Zero Bytes Technology Consulting LLC
                      </Typography>
                    </Box>
                    <Box>
                      <Box mb={2}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h6" : "body1"}
                          color="textSecondary"
                        >
                          We believe that technology is the foundation to any great business. Our business is to make sure that your business has the foundation that it needs to grow to its fullest.
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        className={classes.extraLargeButton}
                        classes={{ label: classes.extraLargeButtonLabel }}
                        href="#prices"
                      >
                        Learn About Our Offers
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Hidden smDown>
                  <Grid item md={6}>
                    <ZoomImage
                      src={`${process.env.PUBLIC_URL}/images/header.jpg`}
                      className={classes.image}
                      alt="header image of laptop on desk"
                    />
                  </Grid>
                </Hidden>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
