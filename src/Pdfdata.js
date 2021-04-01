import React, { Component } from 'react'
import './Body.css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';
import {StyledTableCell} from './CustomComponents'
import { ThemeProvider } from 'react-bootstrap';



const StyledPaper = withStyles((theme) => ({
    root:{
        minWidth:700,
        width:'95%'
    }
  }))(Paper);
  

export default class Pdfdata extends Component {
    
    render() {
    const {company_details,date,invoice_number,customer_id}=this.props.data2
    //const{rows}=this.props.data1
    console.log(this.props.data1," pdfdata.js " )
    return (
            <div>
                <div style={{display:"flex"}}>
                <div id="company-fields">
                <h5>company_details</h5>
                {company_details}
                </div>

                <div id="customer-fields" align="right" style={{flex:0.8}}>
                    <h5>customer_details</h5>
                    customer_id: {customer_id}
                    <br/>
                    invoice_number:{customer_id}
                    <br/>
                    date:{date}
                    <br/>
                    </div>
                    </div>
                
                <div className="invoice-tabel">
                <StyledPaper>
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
                              
                     {this.props.data1.rows.map(a=>(
                         <TableRow key={a.serial_no}>
                            <StyledTableCell >{a.serial_no}</StyledTableCell>
                            <StyledTableCell align="right">{a.products}</StyledTableCell>
                            <StyledTableCell align="right">{a.no_items}</StyledTableCell>
                            <StyledTableCell align="right">{a.price}</StyledTableCell>
                            <StyledTableCell align="right">{a.tax}</StyledTableCell>
                            <StyledTableCell align="right">{a.total_price}</StyledTableCell>
                        </TableRow>
                     ))}
                   
                         </TableBody>
                   
                   
                 </Table>
               </TableContainer>
               <div>
                   TOTAL_PRICE:{this.props.data1.TOTAL_PRICE}
               </div>
               </Paper>
             
            </StyledPaper>
           </div>
            </div>
            
        )
    }
}
