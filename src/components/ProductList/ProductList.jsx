import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";

const ProductList = () => {
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
      <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
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
      </div>
    </React.Fragment>
  );
};
export default ProductList;
