import { Grid, Card, CardContent, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const selectdata = useSelector((state) => state.cartReducer.cart);

  return (
    <Grid container spacing={3}>
      {selectdata.map((item) => (
        <Grid item xs={12}>
          <Card sx={{ bgcolor: "papayawhip" }} align="center">
            <CardContent>
              <img src={item.image} alt="" height={200} width={140} />
              <h3>{item.title.slice(0,20)}</h3>
              <h4>{item.category}</h4>
              <p>{ item.description.slice(0,50)}.....</p>
              <Button variant="contained" color="success">
                Remove
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
