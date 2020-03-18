import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  tabContainer: {
    marginLeft: "auto",
    color: "secondary"
  },
  tabStyle: {
    display: "flex",
    textTransform: "none",
    textColor: "secondary"
  },
  AppBarStyle: {
    background: "linear-gradient(45deg, #11998e 10%, #38ef7d 90%)"
  },
  menuStyle: {
    margin: "10px"
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  logo: {
    [theme.breakpoints.down("md")]: "7em",
    [theme.breakpoints.down("xs")]: "5em"
  }
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const tabs = (
    <React.Fragment>
      <Tabs className={classes.tabContainer}>
        <Tab
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="false         
            +"
          onMouseOver={handleToggle}
          className={classes.tabStyle}
          label="Products"
        ></Tab>

        <Tab className={classes.tabStyle} label="Company"></Tab>
        <Tab className={classes.tabStyle} label="Contact" />
        <Tab className={classes.tabStyle} label="Login" />

        <Tab className={classes.tabStyle} label="Register" />
      </Tabs>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Treasury Bills</MenuItem>
                  <MenuItem onClick={handleClose}>Federal Govt. Bond</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Apel Investment Note
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <AppBar className={classes.AppBarStyle}>{matches ? null : tabs}</AppBar>
    </React.Fragment>
  );
}

export default Header;
