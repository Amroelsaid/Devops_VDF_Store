import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Outlet, Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

///pass Data , ProductsData , 
export default function ImageList({Data,ProductsData,addToBasket}){

    return(
    
    <Box sx={{flexGrow:1}}>
    <Grid container spacing={10}>
         
         {Object.values(Data).map((product,index) => (
           
             <Grid  item xs={4}>
             <Item >
             <Link to='/Product'>
               <img key={index} onClick={()=>ProductsData(product)} className="product" src={product.image}/>
             </Link>
                 <p>{product.title}</p>
                 <p>{product.price+' $'}</p>
                 <Stack direction="row" spacing={1}>
                 <IconButton  onClick={addToBasket}  color="primary" aria-label="add to shopping cart">
                 <AddShoppingCartIcon  /> <p> Add to Basket</p>
                 </IconButton>
                 </Stack>                
                 </Item>
                 </Grid>))}

                 
    </Grid>
    </Box>

          
)}


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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  }));
