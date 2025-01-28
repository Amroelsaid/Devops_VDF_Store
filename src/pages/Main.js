import { ClassNames } from "@emotion/react";
import React from "react";
import { json } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Button, Dialog ,DialogContent ,DialogContentText} from "@mui/material";
import Product from "../components/Product";
import { useCategories } from "../hooks/useCategories";
import { useQuery } from 'react-query';
import { useData } from "../hooks/useData";
import ImageList from '../components/Imagelist';



export default function Main({ProductsData,addToBasket,catFromDrawer}){

const [data, Loading , Error] = useData()
//const [Data,setData]=React.useState()

if (Loading) {
  return (<div>Loading...</div>)
}
if (Error) {
  return (<div>Error fetching data</div>);
}

if(data){

const dataFiltered = Object.values(data).filter((item)=>item.category===catFromDrawer)
const prodctsNumber = (!catFromDrawer || catFromDrawer=='intial') ? data.length: dataFiltered.length
const Data=(!catFromDrawer || catFromDrawer=='intial') ? data: dataFiltered


    return(
    
      <div className="main">
        <br/>    
      {<p>{` ${prodctsNumber} Products`}</p>}
        
      <ImageList Data={Data} ProductsData={ProductsData} addToBasket={addToBasket}/>
      </div>

    )
  } }

  
  


   ///////////////////////////////////////////////////////////////////////

  //  {openproduct&& && <Modal open={openModal} onClose={()=>handelModal}>
  //  <Box sx={style}>
    
  //  </Box>{Desc}
  //  </Modal> }



// showText && (<Typography
// variant="h3"
// style={{
// position: 'absolute',
// top: '50%',
// left: '50%',
// transform: 'translate(-50%, -50%)',
// color: "black", // Text color
// textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
// }}>{Desc}</Typography>)



// {!catFromDrawer ?? <p>{` ${data.length} Products`}</p>: <p>{` ${dataFiltered.length} Products`}</p>}


//////////////////////////////////////////////old Main funcation/////////////////////////////

// export default function Main({ProductsData,addToBasket,catFromDrawer}){
//   {catFromDrawer&&console.log(catFromDrawer)}
  
  
//   const [data, Loading , Error] = useData()
//   const [openModal, setopenModal ]=React.useState(false)
  
  
//   if (Loading) {
//     return (<div>Loading...</div>)
//   }
//   if (Error) {
//     return (<div>Error fetching data</div>);
//   }
  
//   if(data){
   
      
//       ///////////////////////////////////////////////////////////////////////////////////
  
//   const dataFiltered = Object.values(data).filter((item)=>item.category===catFromDrawer)
//   const prodctsNumber = (!catFromDrawer || catFromDrawer=='intial') ? data.length: dataFiltered.length
  
//   //function imagesList(data,addToBasket,catFromDrawer,dataFiltered)
            
//   function imagesList(){
//       return (
        
//           <div className="main">
              
//               {<p>{` ${prodctsNumber} Products`}</p>}
  
//           <Box sx={{flexGrow:1}}>
//      <Grid container spacing={10}>
          
//           {(!catFromDrawer || catFromDrawer=='intial') &&Object.values(data).map((product,index) => (
            
//               <Grid  item xs={4}>
//               <Item >
//               <Link to='/Product'>
//                 <img key={index} onClick={()=>ProductsData(product)} className="product" src={product.image}/>
//               </Link>
//                   <p>{product.title}</p>
//                   <p>{product.price+' $'}</p>
//                   <Stack direction="row" spacing={1}>
//                   <IconButton  onClick={addToBasket}  color="primary" aria-label="add to shopping cart">
//                   <AddShoppingCartIcon  /> <p> Add to Basket</p>
//                   </IconButton>
//                   </Stack>                
//                   </Item>
//                   </Grid>
           
//               )
                  
//           )}
  
//   {catFromDrawer&&dataFiltered.map((product,index) => (
            
//             <Grid  item xs={4}>
//             <Item >
//             <Link to='/Product'>
//               <img key={index} onClick={()=>ProductsData(product)} className="product" src={product.image}/>
//             </Link>
//                 <p>{product.title}</p>
//                 <p>{product.price+' $'}</p>
//                 <Stack direction="row" spacing={1}>
//                 <IconButton  onClick={addToBasket}  color="primary" aria-label="add to shopping cart">
//                 <AddShoppingCartIcon  /> <p> Add to Basket</p>
//                 </IconButton>
//                 </Stack>                
//                 </Item>
//                 </Grid>
         
//                )
                
//         )}
  
  
        
//       </Grid>
//       </Box>
  
   
//     </div>
  
//   )}
  
  
  
  
//       return(
      
//         <div>
//           <br/>
        
//           {imagesList()}
//         </div>
  
//       )
//     } }
  
//     //Styling const data
  
//     const style = {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       width: 450,
//       bgcolor: 'background.paper',
//       border: '2px solid #000',
//       boxShadow: 24,
//       p: 4,
//     };
  
//   const Item = styled(Paper)(({ theme }) => ({
//       backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//       ...theme.typography.body2,
//       padding: theme.spacing(1),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
    
//     }));