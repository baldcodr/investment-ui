import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import createMuiTheme from "../../ui/Theme";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  depositContext: {
    fontSize: "10px"
  },
  money: {
    fontFamily: "Questrial",
    color: theme.palette.primary
  },
  perfomance: {
    position: "relative",
    paddingLeft: 5,
    paddingTop: 70,
    color: "green"
  },
  performanceText: {
    fontFamily: "Righteous"
  },
  wallet: {
    display: "flex",
    position: "static",
    justifyContent: "space-between",
    color: "#53de2a"
  }
}));

export default function PortfolioValue() {
  const classes = useStyles();
  let today = new Date();
  let date =
    today.getDate() +
    " " +
    today.toLocaleString("default", { month: "long" }) +
    " " +
    today.getFullYear();
  return (
    <React.Fragment>
      <div className={classes.wallet}>
        <Title>Portfolio Value</Title>
        <AccountBalanceWalletIcon color="green" fontSize="large" />
      </div>

      <Typography variant="h4" className={classes.money}>
        ₦54,000,000.00
      </Typography>

      <div>
        <Typography
          variant="p"
          color="textSecondary"
          className={classes.depositContext}
        >
          as at {date}
        </Typography>
      </div>
      <div className={classes.perfomance}>
        <Typography variant="h5" className={classes.perfomanceText}>
          <ArrowDropUpIcon />
          46%
        </Typography>
      </div>
    </React.Fragment>
  );
}
