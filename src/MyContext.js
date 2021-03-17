import React, { Component,createContext } from 'react';

export const MyContext=createContext();

class UserProvider extends Component{
   state={
        rows:{name:"as"}
    };
    

    setRows=(rows)=>{
        this.setState((prevState)=>({...prevState,rows}))
    }
    
render(){
    const {children}=this.props
    const {rows}=this.state
    const {setRows}=this
    console.log(rows);
    
    return (
        <MyContext.Provider value={{rows,setRows}}>
            {children}
        </MyContext.Provider>
    )
}
}
export default MyContext;
export {UserProvider};