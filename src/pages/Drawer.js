import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

export default function ResponsiveDrawer ({CatFromDrawer}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [category, setCategory] = useState('rrr');

  // function handelCategory1 (){setCategory("Men's clothing")}
  // function handelCategory2 (){setCategory("Women's clothing") }
  // function handelCategory3 (){setCategory("Jewelery") }
  // function handelCategory4 (){setCategory("Electronics");}
  
  return (
    <div>
    
      <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        
      >
    
        <div style={{ width: 250 }}>
          
          <ul className='ul'>
            <Button  onClick={()=>{CatFromDrawer("men's clothing")}}><li>Men's clothing</li></Button>
            <Button  onClick={()=>{CatFromDrawer("women's clothing")}}><li>Women's clothing</li></Button>
            <Button  onClick={()=>{CatFromDrawer("jewelery")}}><li>Jewelery</li></Button>
            <Button  onClick={()=>{CatFromDrawer("electronics")}}><li>Electronics</li></Button>
          </ul>
        </div>
      </Drawer>

      {()=>{CatFromDrawer(category)}}
     
    </div>
  );
};


