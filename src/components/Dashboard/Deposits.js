import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposit</Title>
      <Typography component="p" variant="h4">
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
