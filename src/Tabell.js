
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { Component,useContext} from 'react'
import MyContext from './MyContext'
import {StyledTableRow,button,StyledTableCell} from './CustomComponents'

//import Form from './Form.js';


  //using context
 

  
 export default function Tabell(){

//  handleChange=(e)=>{
//    this.setState({
//      [e.target.name]:e.target.value
//    })
//  }
//  handleSubmit=(e)=>{
//    e.preventDefault();
//    const row={
//     products:this.state.products,
//     no_items:this.state.no_items,
//     tax:this.state.tax,
//     price:this.state.price,
//     total_price:this.state.price*this.state.no_items,
//    }
//    setcontext();
//    //setdata(prevstate=>{...prevstate,});
//  }

      let rows=["1"];
      
        return (
          <Paper>
            <TableContainer component={Paper}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>SERIAL No</StyledTableCell>
                  <StyledTableCell align="right">PRODUCT NAME</StyledTableCell>
                  <StyledTableCell align="right">NO Of ITEMS</StyledTableCell>
                  <StyledTableCell align="right">TAX</StyledTableCell>
                  <StyledTableCell align="right">PRICE</StyledTableCell>
                  <StyledTableCell align="right">TOTAL_PRICE</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                         
               {rows.map(row=>(
                <TableRow>
                  <StyledTableCell >sad</StyledTableCell>
                  <StyledTableCell align="right">sad</StyledTableCell>
                  <StyledTableCell align="right">sad</StyledTableCell>
                  <StyledTableCell align="right">sad</StyledTableCell>
                  <StyledTableCell align="right">sad</StyledTableCell>
                  <StyledTableCell align="right">sad</StyledTableCell>
                </TableRow>
          ))}
              
              </TableBody>
              
              
            </Table>
          </TableContainer>
          
          </Paper>
        )
    }

 
  Tabell.contextType=MyContext;