import React from 'react';
import Button from '@material-ui/core/Button';
import './Sidebar.css';



function Sidebar(){
    return(
        <div className="sidebar">
            <Button variant='text' >
                Generate Invoice
            </Button>
            <Button variant='text'>
                View User Profile
            </Button>
        </div>
    )
}
export default Sidebar