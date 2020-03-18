import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
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
    color: "red"
  },
  performanceText: {
    fontFamily: "Righteous"
  },
  wallet: {
    display: "flex",
    position: "static",
    justifyContent: "space-between",
    color: createMuiTheme.palette.primary
  }
}));

export default function CashBalance() {
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
        <Title>Cash Balance</Title>
        <AccountBalanceIcon fontSize="large" />
      </div>

      <Typography variant="h4" className={classes.money}>
        ₦3,000,024.00
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
          <ArrowDropDownIcon />
          13%
        </Typography>
      </div>
    </React.Fragment>
  );
}
