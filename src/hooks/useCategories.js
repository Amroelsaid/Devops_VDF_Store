import { useState,useEffect } from "react";

export const useCategories = ()=>{


    const apiUrl = 'https://api.example.com/data';

    
    // axios.get(apiUrl)
    //   .then(response => {
    //     console.log('Data:', response.data);
        
    //   })
    //   .catch(error => {
    //     console.error('Error during fetch operation:', error);
    //   });  
 


 const [loading, setLoading] = useState(true);
    const [data,setdata]=useState([])
    useEffect(() => {
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
return [data, loading]

}