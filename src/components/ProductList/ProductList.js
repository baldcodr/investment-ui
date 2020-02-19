import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import Product from "../Product/Product";

const SPACE_ID = "i6so44tf7hz1";
const ACCESS_TOKEN = "dx8tDcfo1mNEPWBRlRVHGQxsQ3h7M1dRafKTPQLZBMM";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});
class ProductsList extends Component {
  state = {
    products: [],
    searchString: ""
  };
  constructor() {
    super();
    this.getProducts();
  }
  getProducts = () => {
    client
      .getEntries({
        content_type: "product",
        query: this.state.searchString
      })
      .then(response => {
        this.setState({ products: response.items });
        console.log(this.state.products);
      })
      .catch(error => {
        console.log("Error occurred while fetching Entries");
        console.error(error);
      });
  };
  onSearchInputChange = event => {
    console.log("Search changed ..." + event.target.value);
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getProducts();
  };
  render() {
    return (
      <div>
        {this.state.products ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for products"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.products.map(currentProduct => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Product product={currentProduct} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No products found"
        )}
      </div>
    );
  }
}
export default ProductsList;
