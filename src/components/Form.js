import React from 'react'
import {
  Input,  FormControl,  InputLabel,  FormHelperText,  Checkbox,  Switch,  FormControlLabel,    Stack,  Button,  TextField, FormLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';


export default function Format(pops){

        
        const [firstName, setFirstName] = React.useState("");
        const [lastName,setlastName]=React.useState("")
        const [email,setemail]=React.useState("")
        const [emailError,setemailError]=React.useState(false)
        const [phonNumber,setphonNumber]=React.useState("")
        const [dateOfBirth,setDateOfBirth]=React.useState("")

        const handleSubmit = (event) => {
          event.preventDefault()
   
          setemailError(false)
          
   
          if (email == '') {
            setemailError(true)
          }
        
   
      }
        return (
          
            <form className='format' onSubmit={handleSubmit}>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} useFlexGap flexWrap="wrap" >  
                <FormControl >
                 <InputLabel>First Name</InputLabel>
                 <Input autoFocus id='fname' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                 <FormHelperText id="my-helper">please enter your first name</FormHelperText>
              </FormControl>

              <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input id='lname' value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                <FormHelperText id='my-helper'>please enter your last name</FormHelperText>
              </FormControl>
           </Stack>
           
           <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
           <FormControl>
             <InputLabel>Email Address</InputLabel>
             <Input id='email' value={email}  onChange={(e)=>setemail(e.target.value)} required error={emailError}/>
             <FormHelperText>please enter your Email address*</FormHelperText>
           </FormControl>
           <FormControl>
            <InputLabel htmlFor="phnNumber">Phone Number</InputLabel>
            <Input id="phnNumber" value={phonNumber} onChange={(e) => setphonNumber(e.target.value)}/>
            <FormHelperText>Please enter your phone number</FormHelperText>
           </FormControl>
          </Stack>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
    
        <DemoItem label="please enter your birth date">
          <DatePicker />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  <br></br>
<Button type='submit' className='mainButtons' variant="contained">Register</Button>
    </form>
  
      )};

        
      
      
  