import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

import './Sidebar.css';

const typography=withStyles(themem=>({
    root: {
        color:"red"
      }
}))(Typography)

function Sidebar(){
    return(
        <div className="sidebar"  >
            <Typography variant='text' color="black">
                Made by:
            </Typography>
            <br/>
            <br/>
            <Typography variant={"h5"} >
               Harsh Vashistha
            </Typography >
            <Typography variant={"h5"}>
               Yash Singh
            </Typography>
            <Typography variant={"h5"}>
               Kartike Mangal
            </Typography>
            
        </div>
    )
}
export default Sidebar