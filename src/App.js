import React from 'react'
import './style.css'
import Format from './components/Form';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import { Layout } from './pages/Layout';
import Category from './pages/Category';
import Sale from './pages/Sale';
import Main from './pages/Main';
import { Component } from 'react';
import Popup from 'reactjs-popup';
import Modal from '@mui/material/Modal';
import { Button, Badge }  from '@mui/material';
import Box from '@mui/material/Box';
import Signin from './components/Signin';
import Product from './components/Product';
import ResponsiveDrawer from './pages/Drawer'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';


export default function App()
{
    
  
  
  
  const [click,setclick]=React.useState(false)
  const [open,seteopen]=React.useState(false)
  const [catFromDrawer,setcatFromDrawer]=React.useState('intial')//set Category data to be send from Drawer.js and send to Main.js
  const [Products,setProducts] = React.useState('')//set Products data to be send from Main.js and send to Product.js
const [log,setlog]=React.useState(true)
  
  function signIn(){return (setclick((x)=>!click))}
  function handelOpen(){return (seteopen(true))}
  function handelClose(){seteopen(false); setlog(true) }
  function ProductsData(data){setProducts(data)} //funcion to update products data to be send to Products.js
  function CatFromDrawer(data){setcatFromDrawer(data)}//funcion to update Category data to be send to Main.js
  function handelLog(){setlog(false) }

  // set basket button
  const [basketCount, setBasketCount] = React.useState(0);
  function addToBasket(){
    setBasketCount(basketCount + 1);}

return (
<div>
<div className='header'>
  <ResponsiveDrawer CatFromDrawer={CatFromDrawer}/>
  <IconButton  aria-label="cart">
  <StyledBadge badgeContent={basketCount} color="secondary">
    <ShoppingCartIcon className='cart'/>
  </StyledBadge>
</IconButton>
{!open&&<button className='signbutton' onClick={handelOpen}>Sign In</button>}
</div>
<Modal open={open}
        onClose={handelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"><Box sx={style}>
          {log&& <Signin handelLog={handelLog}/>}
          {!log&& <Format />}
        </Box></Modal>
       
  
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout signIn={signIn} sign={click} CatFromDrawer={CatFromDrawer}/>}>
      <Route index element={<Main ProductsData={ProductsData} addToBasket={addToBasket} catFromDrawer={catFromDrawer} /> }/>
      <Route path="Category" element={<Category /> }/>
      <Route path="Sale" element={<Sale /> }/>
      <Route path="Product" element={<Product Products={Products} /> }/>
  
      </Route>
    </Routes>
    </BrowserRouter>
    

    
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -6,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
  },
}));