import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Edit(props) {
  const { open, setOpen } = props;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number:'',
    totalItemsPurchased: 0,
    totalPriceInCart: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //validate
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
handleClose()

  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit Profile
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div style={{display:'flex',justifyContent:"space-evenly",flexDirection:"row",width:'100%'}}>
  <div style={{marginTop:'2rem',width:"100%"}}>   
    <div style={{display:'flex',flexDirection:'column',gap:'2rem',width:'100%'}}>
      <div>
        <span>Name</span>
        <input 
          type="text" 
          name="name" 
          style={{width:"100%",height:"35px",borderRadius:'10px'}}
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          className="mb-2 p-2 w-full border rounded"
        />
      </div>
      <div>
        <span>Mobile Number</span>
        <input 
          type="number" 
          name="number" 
          style={{width:"100%",height:"35px",borderRadius:'10px'}}
          value={formData.number} 
          onChange={handleChange} 
          placeholder="mobile number" 

          className="mb-2 p-2 w-full border rounded"
          required
        />
      </div>
      <div>
        <span>Email address</span>
        <input 
          type="text" 
          name="email" 
          style={{width:"100%",height:"35px",borderRadius:'10px'}}
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
          className="mb-2 p-2 w-full border rounded"
        />
      </div>
      <div>
        <span>Total Order Placed</span>
        <input 
          type="number" 
          name="totalItemsPurchased" 
          style={{width:"100%",height:"35px",borderRadius:'10px'}}
          value={formData.totalItemsPurchased} 
          onChange={handleChange} 
          placeholder="Total Items Purchased" 
          className="mb-2 p-2 w-full border rounded"
        />
      </div>
    </div>
  </div>
</div>
        </DialogContent>
        <DialogActions>
        <button style={{marginRight:'1rem',background:"#92e427",fontSize:'16px',border:"none",color:'white',borderRadius:'5px',padding:'10px'}}>Cancel</button>
           <button  style={{display:"flex",fontSize:'16px',alignItems:"center",background:"rgba(0, 0, 0, 0.87)",border:"none",color:'white',borderRadius:'5px',padding:'10px'}} onClick={handleSubmit}>Save</button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
