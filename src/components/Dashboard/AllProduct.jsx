import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import SearchAppBar from "./SearchBar";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    maxWidth: "100vw",
    height: "100vh"
  },
  containerr: {
    display: "flex",
    flexDirection: "row"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%"
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

export default function AllProduct() {
  const classes = useStyles();

  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Treasury Bills",
      market: "equity",
      description: "Nigerian Treasury Bills",
      image:
        "https://apel.com.ng/wp-content/uploads/2019/04/thinkstockphoto.jpg"
    },
    {
      id: 2,
      name: "A. I. Note",
      market: "multiple",
      description: "Flexible Investment",
      image: "https://apel.com.ng/wp-content/uploads/2019/04/grow-wealth.png"
    },
    {
      id: 3,
      name: "Equities",
      market: "equity",
      description: "Nigerian Bonds",
      image: "https://apel.com.ng/wp-content/uploads/2019/04/wealth-mgt.png"
    },
    {
      id: 4,
      name: "ATTS",
      market: "equity",
      description: "Nigerian Bonds",
      image: "https://apel.com.ng/wp-content/uploads/2019/04/wealth-mgt.png"
    },
    {
      id: 5,
      name: "ACET",
      market: "equity",
      description: "Child Trust",
      image: "https://apel.com.ng/wp-content/uploads/2019/04/wealth-mgt.png"
    },
    {
      id: 6,
      name: "Euro Bond",
      market: "equity",
      description: "European Bonds",
      image: "https://apel.com.ng/wp-content/uploads/2019/04/wealth-mgt.png"
    }
  ]);

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="lg">
        {/* Search Bar */}
        <SearchAppBar xs={12} />
        {/* Product */}
        <Grid container spacing={1}>
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
    </React.Fragment>
  );
}
