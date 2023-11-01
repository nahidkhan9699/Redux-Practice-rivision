import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { Grid,Card,CardContent, Button } from '@mui/material';
export const Product = () => {
    const [data,setData]=useState([])
    const dispatch=useDispatch();
    const selectdata=useSelector((state)=>state.productReducer.prod);
    console.log("========>",selectdata)
    const getApi=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products");

        const type="ADD_PRODUCT"
        const payload=result.data
        const action={type,payload}
        dispatch(action);
        setData(result.data)
    }
    useEffect(()=>{
        getApi()
    },[])
    const addtocart=(item)=>{
        const type="ADD__TO__CART"
        const payload=item
        const action={type,payload}
        dispatch(action)
    }
    return (
       <Grid container spacing={2} sx={{marginTop:2}}>
        {
      data.map((item)=>
      <Grid item xs={3}>
        <Card sx={{bgcolor:"papayawhip"}}align="center">
            <CardContent>
                <img src={item.image} alt="" height={200} width={140} style={{borderRadius:10}} />
                <h3>{item.title.substr(0,10)}</h3>
                <h4>{item.category}</h4>
                <p>{item.description.substr(0,40)}.....</p>
                <Button onClick={()=>addtocart(item)} variant="contained" color='success'>Add to Cart</Button>
            </CardContent>
        </Card>
      </Grid>
      
      )
        }
       </Grid>
    );
};

