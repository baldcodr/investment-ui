import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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
    padding: theme.spacing(2),
    display: "flex",
    paddingRight: theme.spacing(4),
    marginRight: theme.spacing(4)
  },
  fixedHeight: {
    height: 240
  },
  contain: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  },
  formControl: {
    display: "block"
  }
}));

export default function Account() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    message: true,
    email: false,
    pushNotification: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { message, email, pushNotification } = state;
  const error = [message, email, pushNotification].filter(v => v).length !== 2;

  return (
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Title>Notification/KYC Settings</Title>

        <div className={classes.contain}>
          <div className={classes.paper}>
            <div className={classes.formControl}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Notification</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={message}
                        onChange={handleChange("message")}
                        value="message"
                      />
                    }
                    label="Push Notification"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={email}
                        onChange={handleChange("email")}
                        value="email"
                      />
                    }
                    label="Email"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={pushNotification}
                        onChange={handleChange("pushNotification")}
                        value="pushNotification"
                      />
                    }
                    label="Push Notification"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={pushNotification}
                        onChange={handleChange("pushNotification")}
                        value="pushNotification"
                      />
                    }
                    label="Text"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={pushNotification}
                        onChange={handleChange("pushNotification")}
                        value="pushNotification"
                      />
                    }
                    label="Phone Call"
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
            </div>

            <div className={classes.formControl}>
              <FormControl
                required
                fullWidth
                component="fieldset"
                className={classes.formControl}
              >
                <FormLabel component="legend">Messages</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={message}
                        onChange={handleChange("message")}
                        value="message"
                      />
                    }
                    label="Email"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={email}
                        onChange={handleChange("email")}
                        value="email"
                      />
                    }
                    label="Push Notification"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={pushNotification}
                        onChange={handleChange("pushNotification")}
                        value="pushNotification"
                      />
                    }
                    label="Text"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          {/* KYC SECTION */}
          <div>
            <form action="#" className={classes.form} noValidate>
              <Grid container spacing={2} xs={12} sm={12} md={12} lg={12}>
                {/* Upload Document Section */}
                <Grid item xs={12} sm={12}>
                  <Grid>
                    <Typography component="p" variant="p" size="small">
                      International Passport | National ID Card | Voter's Card |
                      Driver's License
                    </Typography>
                  </Grid>
                  <TextField
                    name="id-doc"
                    variant="outlined"
                    required
                    type="file"
                    id="id-doc"
                    fullWidth
                    autoFocus
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    xs={6}
                    endIcon={<CloudUploadIcon />}
                  >
                    Upload
                  </Button>
                </Grid>
                {/* Upload Document Section */}

                {/* Upload Document Section */}
                <Grid item xs={12} sm={12}>
                  <Grid>
                    <Typography component="p" variant="p" size="small">
                      Utility Bill
                    </Typography>
                  </Grid>
                  <TextField
                    name="utility-bill"
                    variant="outlined"
                    required
                    type="file"
                    id="id-doc"
                    fullWidth
                    autoFocus
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    xs={6}
                    endIcon={<CloudUploadIcon />}
                  >
                    Upload
                  </Button>
                </Grid>
                {/* Upload Document Section */}
                <Grid item xs={12} sm={12}>
                  <Grid>
                    <Typography component="p" variant="p" size="small">
                      Passport Photograph
                    </Typography>
                  </Grid>
                  <TextField
                    name="id-doc"
                    variant="outlined"
                    required
                    type="file"
                    id="id-doc"
                    fullWidth
                    autoFocus
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    xs={6}
                    endIcon={<CloudUploadIcon />}
                  >
                    Upload
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
