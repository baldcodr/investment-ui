import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuPopupState from "./ProductMenu";
import popupState from "./ProductMenu";

const useStyles = makeStyles(theme => ({
  tabContainer: {
    marginLeft: "auto",
    color: "secondary"
  },
  tabStyle: {
    textTransform: "none",
    textColor: "secondary"
  },
  AppBarStyle: {
    background: "linear-gradient(45deg, #11998e 10%, #38ef7d 90%)"
  },
  menuStyle: {
    margin: "10px"
  }
}));

function Header() {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = useState(false);

  // const handleClick = (e) => {
  //   setAnchorEl(e.currentTarget)
  //   setOpen(true)
  // }

  // cons handleClose = (e) => {
  //   setAnchorEl(null)
  //   setOpen(false)
  // }
  return (
    <React.Fragment>
      <AppBar className={classes.AppBarStyle}>
        <Tabs className={classes.tabContainer}>
          <Tab
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
            className={classes.tabStyle}
            label="Products"
          >
            <MenuPopupState />
          </Tab>
          <Tab className={classes.tabStyle} label="Company" />
          <Tab className={classes.tabStyle} label="Contact" />
          <Tab className={classes.tabStyle} label="Login" />
          <Tab className={classes.tabStyle} label="Register" />
          {/* <MenuIcon className={classes.menuStyle} /> */}
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
