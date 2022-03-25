import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";
import {
  // Book,
  Home,
  LockOpen,
  Menu,
  MonetizationOn,
  RoomService
} from "@material-ui/icons"
import NavigationDrawer from "./NavigationDrawer";
import QuoteForm from "../home/quoteSection/QuoteForm";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Teko', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;

  const menuItems = [
    {
      link: "#",
      name: "Home",
      icon: <Home className="text-white" />
    },
    {
      link: "#features",
      name: "Features",
      icon: <RoomService className="text-white" />
    },
    {
      link: "#prices",
      name: "Prices",
      icon: <MonetizationOn className="text-white" />
    },
    // {
    //   link: "#/blog",
    //   name: "Blog",
    //   icon: <Book className="text-white" />
    // },
    {
      link: "#/billing",
      name: "Billing Portal",
      icon: <LockOpen className="text-white" />
    }
  ];
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Link
              to={"/"}
              className={classes.noDecoration}
            >
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="secondary"
              >
                Zero Bytes Consulting
              </Typography>
            </Link>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <Menu color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <Button
                      key={element.name}
                      color="secondary"
                      size="large"
                      classes={{ text: classes.menuButtonText }}
                      href={element.link}
                      onClick={handleMobileDrawerClose}
                    >
                      {element.name}
                    </Button>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
              <QuoteForm text="Get Quote" textVariant="body1"/>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
