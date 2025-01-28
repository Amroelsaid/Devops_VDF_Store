  //Fetch data with query 

  import { useQuery } from 'react-query';

  
 const fetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export  const  useData = () => {


  
  const { data, loading, error } = useQuery('Data', fetchData);

console.log('Test useData rendering')
  
  return [data , loading, error]

};




      
    //fetch data using useEffect

    // const [categories,isLoading] = useCategories()
    // const [loading, setLoading] = React.useState(true);
    // const [data,setdata]=React.useState([])
    // React.useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('https://fakestoreapi.com/products');
    //       // Check if the response is successful (status code 200-299)
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
          
    //       const result = await response.json();
    //     setdata(result);
    //       setLoading(false);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       setLoading(false);
    //     }
       
    //   };
  
    //   fetchData();
    // }, []);
