import React from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Category(catFromDrawer){

    const apiUrl = 'https://api.example.com/data';

    
    axios.get(apiUrl)
      .then(response => {
        console.log('Data:', response.data);
        
      })
      .catch(error => {
        console.error('Error during fetch operation:', error);
      });  



 const [loading, setLoading] = React.useState(true);
    const [data,setdata]=React.useState([])
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          // Check if the response is successful (status code 200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const result = await response.json();
        setdata(result);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
       
      };
  
      fetchData();
    }, []);

  }




   