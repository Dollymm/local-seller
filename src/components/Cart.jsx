import {  Typography, Box, Grid, Button, Card} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {
  
  return (
    <Box style={{ margin: '0px' }}>
      <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}>
        <ArrowBackIcon />
        <span style={{ marginLeft: '0.5rem', fontSize: 24 }}>Shopping cart</span>
      </Box>

      <Grid container spacing={2} sx={{padding:0,height:'60vh',overflowY:"scroll"}}>
        {/* Grid item for each card */}
        {[...Array(15)].map((_, index) => (
          <Grid sx={{padding:0}} key={index} item xs={12} md={4}>
            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-evenly", height: '8rem' }}>
              <Box> 
                <img style={{ width: '8rem', height: 'auto', objectFit: 'cover' }} src="https://imgs.search.brave.com/y0NpTLueBYo4Prlg-oC6WDYRaQBFeJjw9DYJEctl7YI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgzLzMyLzY0/LzM2MF9GXzU4MzMy/NjQ5M19zbFczSU1J/cnEycGZMQmNlR0l5/TUVlOXBxZUszOUhR/di5qcGc" alt="Nike Air Jorden Max" />
              </Box>
              {/* Second Part */}
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Nike Air Jorden Max</Typography>
                <Typography sx={{ color: 'gray' }}>Red Jumbo</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button ><RemoveIcon/></Button>
                  <Box sx={{ fontWeight: '600' }}>0</Box>
                  <Button ><AddIcon/></Button>
                </Box>
              </Box>
              {/* Third Part */}
              <Box 
              sx={{
                display: 'flex',flexDirection:'column',height: '100%', justifyContent: 'space-evenly'
              }}
              >
                <DeleteIcon sx={{color:"rgba(0, 0, 0, 0.87)"}}/>
                <Typography sx={{color:"#92e427",fontWeight:'600',fontSize:'20px'}}>$700</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Common box for subtotal, shipping, and total */}
     

      <Box sx={{ display: 'flex', mt: '5%' }}>
        <Box><Typography>Grand Total</Typography>
        <Typography sx={{fontWeight:'600'}}>$200</Typography></Box>
        <Button variant="outlined" sx={{ backgroundColor: '#92e427', color: 'rgba(0, 0, 0, 0.87)', fontWeight: 'bold', ml:'auto' }}>Checkout</Button>
      </Box>
    </Box>
  );
}

export default Cart;
