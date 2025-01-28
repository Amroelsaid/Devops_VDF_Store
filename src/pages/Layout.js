import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {
    Input,  FormControl,  InputLabel,  FormHelperText, 
    Checkbox,  Switch,  FormControlLabel,    Stack,  Button,  TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import logo from '../vdf.png'
import Format from '../components/Form';
import Sale from './Sale';
import Popup from 'reactjs-popup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton  } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

export  function Layout({CatFromDrawer}){

             
return(
  <div>

  <header className='vodafonehyper'>
    <img src={logo} alt='vodafoneLogo' className='logo'/>
    <h1 >Vodafone Hyper</h1>
 
    </header>
  
  <ThemeProvider theme={theme}>
<Stack spacing={2} direction="row" className='mainButtons'>
<Link to='/'> <Button variant="contained" color='primary' onClick={()=>{CatFromDrawer('')}}>Main</Button></Link>
<Link to='/Sale'><Button variant="contained">Sale</Button></Link> 
</Stack>
</ThemeProvider>
<Outlet/>

  </div>

)}

const theme = createTheme({
  palette: {
    primary: {
      main:'#E60000'},
    secondary:  {
      main:'#FFFFFF'},
  }})


//<div>
//<Link to='/Login'>{!sign&&<button onClick={signIn}>Sign in</button>}</Link>
 
//</div>

// <Link to='/Category'><Button variant="contained" onClick={()=>DropdownButton} >Category

//<Link to='/Category'><Button variant="contained" >
              // <Select
              //   value={selectedOption}
              //   onChange={handleChange}
              //   displayEmpty
                
              // >
              //   <MenuItem value="" disabled>Category</MenuItem>
              //   <MenuItem value="option1">Option 1</MenuItem>
              //   <MenuItem value="option2">Option 2</MenuItem>
              //   <MenuItem value="option3">Option 3</MenuItem>
              // </Select>
            
              //  </Button></Link>