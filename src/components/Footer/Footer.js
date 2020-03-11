import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  style: {
    padding: "20px",
    backgroundColor: "secondary",
    color: "white"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Typography
        className={classes.style}
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {"Copyright © "}
        <Link color="inherit" href="/">
          Apel Asset Limited
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
}
