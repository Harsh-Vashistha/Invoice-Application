import './Body.css'
import Header from './Header.js';
import React from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Layout from './Layout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {StyledTableRow,button,StyledTableCell} from './CustomComponents'



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




    export default class Body extends React.Component {
        // const classes = useStyles();
        constructor(props){
          super(props);
     
          this.state={
           company_details:"",
           customer_id:"",
           invoice_number:"",
           date:"",
           page:'tabell',
           rows:[],
           serial_no:0,
           products:"0",
           no_items:0,
           price:0,
           tax:0,
           total_price:0,
           TOTAL_PRICE:0,
        };
        this.layoutref=React.createRef();
        this.downl=this.downl.bind(this);
        this.updaterow=this.updaterow.bind(this);
      }
    handleChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        });
        
    }
        
        generatepdf=()=>{
          this.setState({page:'generatepdf'});
        }
        downl=()=>{
          //pagecontent=( <Layout state={this.state}/>)
          }
         
         
         updaterow(){
           console.log("updaterow");

           let entry={
             serial_no:this.state.serial_no,
             products:this.state.products,
             no_items:this.state.no_items,
             price:parseInt(this.state.price,10),
             tax:parseInt(this.state.tax,10),
           }

           
           function updateState(state,props){
             const newState={
               ...state,
               serial_no:state.serial_no+1,
               total_price:parseInt(this.state.price,10) * parseInt(this.state.no_items,10)-((this.state.tax*parseInt(this.state.price,10) * parseInt(this.state.no_items,10))/100),
               TOTAL_PRICE:state.TOTAL_PRICE+parseInt(this.state.price,10) * parseInt(this.state.no_items,10)-((this.state.tax*parseInt(this.state.price,10) * parseInt(this.state.no_items,10))/100)
             }
            return newState;
           }
           console.log(this.state.tax,"tax")
          
           
            this.setState(updateState);
            

            // this.setState({total_price:this.state.price + this.state.no_items});

              setTimeout(()=>{
                
                entry={
                  ...entry,
                  total_price:this.state.total_price
                }
                console.log("this is ",this.state.total_price);
              this.state.rows.push(entry);
              console.log(this.state);},1000)
              
            
            return;
          }

      render(){
        const {state}=this.props
        return (
          <div className="body-container">
            <div style={{display:"flex"}}>
            <div id="company-fields" style={{flex:0.2}}>
            {(this.state.page==='tabell')&& <h5>company_details</h5>}
            {(this.state.page==='tabell')&& <input type="text" className="textbox" name="company_details" value={this.state.company_details} onChange={this.handleChange}></input>}
            </div>
            <div id="customer-fields" align="right" style={{flex:0.8}}>
            {(this.state.page==='tabell')&&<h5>customer_details</h5>}
           customer_id: { (this.state.page==='tabell')&& <input type="text" className="textbox" name="customer_id" value={this.state.customer_id} onChange={this.handleChange}></input>}
           <br/>
           <br/>
           invoice_number:{ (this.state.page==='tabell')&& <input type="text" className="textbox" name="invoice_number" value={this.state.invoice_number} onChange={this.handleChange}></input>}
           <br/>
           <br/>
           date:{ (this.state.page==='tabell')&& <input type="text" className="textbox" name="date" value={this.state.date} onChange={this.handleChange}></input>}
           <br/>
           <br/>
            </div>
            </div>

            <div className="invoice-tabel">
            <StyledPaper>
            <Header title="INVOICE"></Header>
            
              {this.state.page==='tabell' && (
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
                              
                    {this.state.rows.map(row=>(
                     <TableRow key={row.serial_no}>
                       <StyledTableCell >{row.serial_no}</StyledTableCell>
                       <StyledTableCell align="right">{row.products}</StyledTableCell>
                       <StyledTableCell align="right">{row.no_items}</StyledTableCell>
                       <StyledTableCell align="right">{row.price}</StyledTableCell>
                       <StyledTableCell align="right">{row.tax}</StyledTableCell>
                       <StyledTableCell align="right">{row.total_price}</StyledTableCell>
                     </TableRow>
               ))}
                   
                   </TableBody>
                   
                   
                 </Table>
               </TableContainer>
                  <input type="text" name="produts" value={this.state.products} onChange={(e)=>{this.setState({products:e.target.value})}}></input>
                  <input type="number" name="no_items" value={this.state.no_items} onChange={(e)=>{this.setState({no_items:e.target.value})}}></input>
                  <input type="number" name="price" value={this.state.price} onChange={(e)=>{this.setState({price:e.target.value})}} ></input>
                  <input type="number" name="tax" value={this.state.tax} onChange={(e)=>{this.setState({tax:e.target.value})}} ></input>
                  <button onClick={this.updaterow}>Add Item</button>
               </Paper>
              )}

              {this.state.page==='generatepdf' &&(<Layout  state={this.state} ref={this.layoutref}/>)}

              {(this.state.page=='tabell') &&<button onClick={this.generatepdf}>generatepdf</button>}               
            </StyledPaper>
          </div>
          </div>
        );
      }
}
