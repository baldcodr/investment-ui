import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import Deposits from "./Deposits";
import Transactions from "./Transactions";
import { PortfolioChart, PortfolioSummary } from "./PortfolioCharts";
import PortfolioProduct from "../ProductList/PortfolioProducts";
import Title from "../Dashboard/Title";
import Product from "../Product/Product";
import SearchAppBar from "./SearchBar";
// import ProductList from "../ProductList/ProductList";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: "100vh"
  },
  containerr: {
    display: "flex",
    position: "relative"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export function DashboardPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  return (
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <PortfolioSummary />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={8}>
            <Paper>
              <PortfolioChart />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Title>Product Recommendations</Title>
            <Paper>
              <PortfolioProduct />
            </Paper>
          </Grid>
          {/* Recent Transactions */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Transactions />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </React.Fragment>
  );
}

export default function ProductList() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [products, setProduct] = useState([
    {
      id: 2334,
      name: "Treasury Bills",
      type: "security"
    },
    {
      id: 2984,
      name: "Apel Investment Note",
      type: "security"
    },
    {
      id: 23544,
      name: "Bonds",
      type: "security"
    }
  ]);
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Grid spacing={24} style={{ padding: 24 }}>
          {/* Search Box */}
          <SearchAppBar xs={12} md={12} lg={12} />
          {/* Product List */}

          <Grid item xs={12} md={4} lg={3} className={classes.containerr}>
            {products.map(product => (
              <Product name={product.name} />
            ))}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
