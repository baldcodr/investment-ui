import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CashBalance from "./CashBalance";
import Transactions from "./Transactions";
import { PortfolioChart, PortfolioSummary } from "./PortfolioCharts";
import PortfolioProduct from "./PortfolioProducts";
import Title from "../Dashboard/Title";
import PortfolioValue from "./PortfolioValue";
// import ProductList from "../ProductList/ProductList";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
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
  }
}));

export default function DashboardPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
              <CashBalance />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <PortfolioValue />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <CashBalance />
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
