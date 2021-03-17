import './Body.css'
import Header from './Header.js';
import React from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabell from './Tabell.js'
import MyContext from './MyContext';



  const StyledPaper = withStyles((theme) => ({
    root:{
        minWidth:700,
        width:'95%'
    }
  }))(Paper);
  

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


    export default function Body() {
        const classes = useStyles();
      
        return (
            <StyledPaper>
            <Header title="INVOICE"></Header>
            
              <Tabell/>
            
            
          </StyledPaper>
        );
}
