// import React ,{useState,useContext}from 'react'
// import {MyContext} from './MyContext'

// const upproducts=e=>{
//     setproducts(e.target.value);
// }
// const upprice=e=>{
//     setprice(e.target.value);
// }
// const upno_items=e=>{
//     setno_items(e.target.value);
// }
// const uptotal_price=e=>{
//     settotal_price(e.target.value);
// }

// const uptax=e=>{
//     settax(e.target.value);
// }

// const setcontext=()=>{
//     const [data,setdata]=useContext(MyContext);
//     console.log("row is ",row);
//     console.log("prev state is ",data);
//     setdata(prevstate=>({rows:[...prevstate.rows,row],...prevstate}));
//   }


// function Form() {
  

 
//     return (
//         <form onSubmit={setcontext}>
//             <input type="text" name="produts" value={this.products} onChange={upproducts}></input>
//             <input type="text" name="no_items" value={this.no_items} onChange={upno_items}></input>
//             <input type="text" name="price" value={this.price} onChange={upprice} ></input>
//             <input type="text" name="tax" value={this.tax} onChange={uptax}></input>
//             <button type="submit">Add item</button>
//           </form>
//     )
// }

// export default Form