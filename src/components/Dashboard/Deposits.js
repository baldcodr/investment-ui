import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  depositContext: {
    fontSize: "10px"
  },
  money: {
    fontFamily: "Questrial",
    color: "theme.palette.primary"
  }
}));

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Cash Balance</Title>
      <Typography variant="h4" className={classes.money}>
        ₦3,000,024.00
      </Typography>

      <div>
        <Typography
          variant="p"
          color="textSecondary"
          className={classes.depositContext}
        >
          on 15 March, 2019
        </Typography>
      </div>
    </React.Fragment>
  );
}
