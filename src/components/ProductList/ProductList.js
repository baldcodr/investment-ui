import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Product from "../Product/Product";

const ProductList = () => {
  const [products, setProduct] = useState([
    {
      id: 2334,
      name: "Treasury Bills",
      type: "security"
    },
    {
      id: 2984,
      name: "Apel Investment Note",
      type: "security"
    },
    {
      id: 23544,
      name: "Bonds",
      type: "security"
    }
  ]);
  return (
    <React.Fragment>
      <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
          {products.map(product => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Product name={product.name} />
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default ProductList;
