import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import Product from "../../components/Product/Product";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/Footer";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    background: "linear-gradient(45deg, #11998e 30%, #38ef7d 90%)",
    color: "white",
    paddingBottom: theme.spacing(20),
    paddingTop: theme.spacing(30),
    height: "100vh"
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    color: "white"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "50%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(50)
  },
  main: {
    backgroundColor: "grey"
  },
  topText: {
    color: "white",
    fontFamily: "Righteous",
    flexGrow: 1
  }
}));

export default function HomePage() {
  const classes = useStyles();

  const [products, setProduct] = useState([
    {
      id: 2334,
      name: "Treasury Bills",
      market: "equity",
      description: "Nigerian Treasury Bills",
      image:
        "https://apel.com.ng/wp-content/uploads/2019/04/thinkstockphoto.jpg"
    },
    {
      id: 2984,
      name: "Apel Investment Note",
      market: "multiple",
      description: "Flexible Investment Product",
      image: "https://apel.com.ng/wp-content/uploads/2019/04/grow-wealth.png"
    },
    {
      id: 23544,
      name: "Equities",
      market: "equity",
      description: "Nigerian Bonds",
      image: "https://apel.com.ng/wp-content/uploads/2019/04/wealth-mgt.png"
    }
  ]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="white"
              className={classes.topText}
              gutterBottom
            >
              Capital Market Investment is Now Easier with Apel
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              We have a range of investment products for you to choose from. Get
              started today and investment in your favourite instrument.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary" href="/signup">
                    Get Started Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary" href="/signin">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={4}>
                <Product
                  name={product.name}
                  image={product.image}
                  description={product.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
