import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Deposits from "./Deposits";
import Transactions from "./Transactions";
import { PortfolioChart, PortfolioSummary } from "./PortfolioCharts";
import PortfolioProduct from "./PortfolioProducts";
import Title from "../Dashboard/Title";
// import ProductList from "../ProductList/ProductList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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
  paper: {
    paddingTop: theme.spacing(2)
  },
  fixedHeight: {
    height: 240
  },
  contain: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  }
}));

export default function Account() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [gender, setGender] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setGender(event.target.value);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  return (
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Title>Customer Profile</Title>

        <div className={classes.contain}>
          <div className={classes.paper}>
            <form action="#" className={classes.form} noValidate>
              <Grid container spacing={2} xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="mname"
                    name="middleName"
                    variant="outlined"
                    required
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    multiline
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="text"
                    id="outlined-multiline-static"
                    rows="4"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="state"
                    label="state"
                    type="state"
                    id="state"
                    autoComplete="state"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    xs={6}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>

          <div className={classes.paper}>
            <form action="#" className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Typography component="p" variant="p">
                  Reset Password
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="old-password"
                    label="Old password"
                    type="password"
                    id="old-password"
                    autoComplete="current-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password Again"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    xs={6}
                  >
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>
            <hr />
            <form action="#" className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Typography component="p" variant="p">
                  Other Information
                </Typography>
                <Grid item xs={12}>
                  <Typography component="p" variant="p">
                    Date of Birth
                  </Typography>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="dob"
                    type="date"
                    id="date"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel
                      ref={inputLabel}
                      id="demo-simple-select-outlined-label"
                    >
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={gender}
                      onChange={handleChange}
                      labelWidth={labelWidth}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    xs={6}
                  >
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
