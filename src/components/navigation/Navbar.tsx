import { Button } from '@mui/material';
import React from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {
   return (
      <div>
         <button onClick={()=>{toast("hello")}}>click</button>
         <Button variant="contained">Contained</Button>
      </div>
   );
};

export default Navbar;