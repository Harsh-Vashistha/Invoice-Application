//state management using context api
import MyContext from './MyContext'


import React from 'react';
import Sidebar from './Sidebar.js';
import Body from './Body';


function App() {
  return (
    <div style={{display:'flex'}}>
      <MyContext.Provider>
      <Sidebar/>
      <Body/>
      </MyContext.Provider>
    </div>
   
  );
}

export default App;
