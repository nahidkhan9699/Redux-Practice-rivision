import React from "react";
import { navData } from "./navData";
import { Button,Card,CardContent,Grid } from "@mui/material";
import { Link } from "react-router-dom";
export const Nav=()=>{
    return(
        <Card>
                <CardContent>

                    <Grid container spacing={2}>
            {
                navData.map((item)=>
                <Grid item xs={item.xs}>
                    <Link to={item.path}>
                        <Button variant="contained"  color="secondary" fullWidth>{item.title}</Button>
                    </Link>
                </Grid>
                )
            }
            </Grid>
                </CardContent>
            </Card>
    )
}