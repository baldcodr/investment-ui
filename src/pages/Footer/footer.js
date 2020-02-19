import React from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Apel Asset Limited
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function footer() {
  {
    /* Footer */
  }
  <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom>
      Apel Asset Limited
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      Freedom at Last
    </Typography>
    <Copyright />
  </footer>;
  {
    /* End footer */
  }
}
