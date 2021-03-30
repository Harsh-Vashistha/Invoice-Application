//state management using context api


import React from 'react';
import Sidebar from './Sidebar.js';
import Body from './Body';


function App() {
  return (
    <div style={{display:'flex'}}>
      
      <Sidebar/>
      <Body/>

    </div>
   
  );
}

export default App;
