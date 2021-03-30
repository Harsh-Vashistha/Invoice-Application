import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
import Pdfdata from './Pdfdata'


export default class Layout extends React.PureComponent{
    
    
    render(){
       // const ref=React.createRef();
    console.log(this.props.state.rows," layout.js ");
    //let row=this.props.state.rows;
   // let as=row.map((e)=><h1 key={e.serial_no}>{e.products}</h1>)

    let headings={
        company_details:this.props.state.company_details,
        customer_id:this.props.state.customer_id,
        invoice_number:this.props.state.invoice_number,
        date:this.props.state.date,
    }
    return (
            <div>
              
                
                <Pdfdata data1={this.props.state} data2={headings} ref={el=>(this.componentref=el)}/>
                <ReactToPrint
                trigger={() => {
                    return <a href="#">Print this out!</a>;
                }}
                content={() =>this.componentref}
                />
                
            </div>
            
        )
    }
}
