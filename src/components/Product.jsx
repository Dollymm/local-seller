import { Box, Grid} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { data } from "../../data";
import {add} from '../features/cart/CartSlice'
import {  useDispatch } from "react-redux";


const Product = () => {
  const dispatch=useDispatch()
  const handleCart=(item)=>{
    dispatch(add(item))

    

  }
 
  
  return (
    <Box sx={{ height:"100%",display: "flex", flexDirection: 'row' }}>
      {/* for filter function  */}
      <Box sx={{paddingRight:'2rem' }}>
        <Box>
          <h2>Categories</h2>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon /> All</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />Electronics</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />Fashion</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />Sports</Box>
        </Box>
        <Box>
          <h2>Price</h2>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />100-500</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />500-1500</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />1500-5000</Box>
        </Box>
      </Box>

      {/* for all data  */}
      <Grid container spacing={2} sx={{height:"100%",overflowY:"scroll"}}>
      
        {data.map((item,id) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={id}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2, boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' , borderRadius: '5px' }}>
              <Box sx={{marginBottom:"1rem",width:"80%"}}>
                <img style={{ width: '80%', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'  }} src={item.image} alt="hello" />
              </Box>
              <Box sx={{fontSize:"16px",fontWeight:'600',width:"100%",textAlign:"initial"}}>
              {item.title}
              </Box>
              <Box sx={{width:"100%",textAlign:"initial"}}>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',fontWeight:'600',fontSize:"16px",width:"100%",textAlign:"initial"}}>
              <CurrencyRupeeIcon sx={{fontSize:"16px"}}/> {item.price}
              </Box>
              <Box sx={{display:"flex",gap:'1rem',marginTop:"1rem",width:"100%",textAlign:"initial"}}>
                <button style={{background:"#92e427",border:"none",color:'white',borderRadius:'5px',padding:'10px'}}>View More</button>
                <button style={{display:"flex",alignItems:"center",background:"rgba(0, 0, 0, 0.87)",border:"none",color:'white',borderRadius:'5px',padding:'10px'}} onClick={()=>handleCart(item)}><ShoppingCartIcon sx={{marginRight:'5px'}}/>
                Add To Cart
               </button>
              </Box>
            
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Product;
