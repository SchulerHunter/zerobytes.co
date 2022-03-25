import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Hidden,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import {
  Phone,
  Mail
} from "@material-ui/icons"
import transitions from "@material-ui/core/styles/transitions";

const styles = theme => ({
  footerInner: {
    backgroundColor: theme.palette.common.darkBlack,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }
  },
  brandText: {
    fontFamily: "'Teko', cursive",
    fontWeight: 400,
    color: theme.palette.common.white
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    backgroundColor: "#33383b !important"
  },
  socialIcon: {
    fill: theme.palette.common.white,
    backgroundColor: "#33383b",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn
    }),
    "&:hover": {
      color: theme.palette.primary.light
    }
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white
  }
});

const infos = [
  {
    icon: <Phone />,
    description: <a href="tel:+16103602551" className="text-white" style={{textDecoration: "none"}}>+1 (610) 360-2551</a>
  },
  {
    icon: <Mail />,
    description: <a href="mailto:admin@zerobytes.co" className="text-white" style={{textDecoration: "none"}}>admin@zerobytes.co</a>
  }
];

function Footer(props) {
  const { classes, width } = props;
  return (
    <Box pt={8}>
      <div className={classes.footerInner}>
        <Grid container spacing={isWidthUp("md", width) ? 10 : 5}>
          <Hidden mdDown>
            <Grid item xs={12} md={4} lg={4} style={{padding:0}}>
              <Box display="flex" justifyContent="center">
                <div>
                  {infos.map((info, index) => (
                    <Box display="flex" mb={1} key={index}>
                      <Box mr={2}>
                        <IconButton className={classes.infoIcon} tabIndex={-1} disabled>
                          {info.icon}
                        </IconButton>
                      </Box>
                      <Box display="flex" flexDirection="column" justifyContent="center">
                        <Typography className="text-white">
                          {info.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </div>
              </Box>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={8} lg={4} style={{paddingTop:0, paddingBottom:0}}>
            <Typography variant="h6" paragraph className="text-white">
              About the Company
            </Typography>

            <Typography style={{ color: "#8f9296" }} paragraph>
              Zero Bytes Technology Consulting is focused on delivering the best-in-class solutions for all of your data needs.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} lg={4} style={{padding:0}}>
            <Box display="flex" justifyContent="center">
              <img
                alt={"Zero Bytes Logo"}
                src={`${process.env.PUBLIC_URL}/favicon.svg`}
                style={{maxWidth: "115px", maxHeight: "115px"}}
              ></img>
            </Box>
          </Grid>

        </Grid>
      </div>
    </Box>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
