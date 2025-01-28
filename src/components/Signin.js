import React from 'react'
import {
  Input,  FormControl,  InputLabel,  FormHelperText,  Checkbox,  Switch,  FormControlLabel,    Stack,  Button,  TextField, FormLabel } from '@mui/material';
import { createTheme, ThemeProvider ,Typography  } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import Format from './Form';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TroubleshootSharp } from '@mui/icons-material';


export default function Signin({handelLog}){
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
        
        const [email,setemail]=React.useState("")
        const [emailError,setemailError]=React.useState(false)
        const [password,setpassword]=React.useState("")


        const handleSubmit = (event) => {
          event.preventDefault()
   
          setemailError(false)
          
   
          if (email == '') {
            setemailError(true)
          }}
const [Openn,setOpen]=React.useState(false)

function handelopen(){
 // handelClose()

    setOpen(true)
    
}

function handelcloseee(){

    return (setOpen(false))
    
}


   
      
        return (
          
<form className='format' onSubmit={handleSubmit}>
    <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
           <FormControl>
             <InputLabel>Email Address</InputLabel>
             <Input autoFocus id='fname' id='email' value={email}  onChange={(e)=>setemail(e.target.value)} required error={emailError}/>
             <FormHelperText>please enter your Email address*</FormHelperText>
           </FormControl>
    </Stack>
    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} useFlexGap flexWrap="wrap" >  
                <FormControl >
                 <InputLabel>Password</InputLabel>
                 <Input value={password} onChange={(e)=>setpassword(e.target.value)} required/>
                 <FormHelperText id="my-helper">please enter password</FormHelperText>
              </FormControl>   
    </Stack> 
  <br></br>
<Button type='submit' className='mainButtons' variant="contained">Sign In</Button>
<p className='new'>New ? <span className='click'><Typography onClick={()=>handelLog()} > Click here</Typography></span></p>


    </form>
  
      )};

        
      // <Modal open={Openn}
      // onClose={handelcloseee}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"><Box sx={style}>
      //   <Format/>
      // </Box></Modal>   
      
  