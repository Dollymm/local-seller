import { Avatar} from "@mui/material";
import { SiTrustedshops } from "react-icons/si";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Edit from "./Modal/Edit";
const Profile = () => {
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
      const [open,setOpen]=useState(false);
      const handleEdit=()=>{
        console.log("hii")
        setOpen(true);
      }
    
      return (
        <div className="flex items-center" style={{display:"flex",flexDirection:'column',width:'100%'}}>

          {/* for arrow  */}
        <div style={{display:'flex',alignItems:'center',marginBottom:'2.5rem'}}>
          <ArrowBackIcon /><span style={{marginLeft:'0.5rem',fontSize:24}}>Profile</span>
        </div>
        
                <div style={{display:'flex',justifyContent:"space-evenly",flexDirection:"row",width:'100%'}}>
         
          <div style={{marginTop:'2rem',width:"40%"}}>   
          <div style={{display:'flex',flexDirection:'column',gap:'2rem',width:'100%'}}>
            <div>
            <span >Name</span>
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
              type="text" 
              name="number" 
              style={{width:"100%",height:"35px",borderRadius:'10px'}}
              value={formData.number} 
              onChange={handleChange} 
              placeholder="mobile number" 
              className="mb-2 p-2 w-full border rounded"
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
          <div style={{marginTop:'1rem',display:'flex',justifyContent:"flex-end",flexDirection:"row",alignContent:"center"}} >
           <button onClick={handleEdit} style={{marginRight:'1rem',background:"#92e427",fontSize:'16px',border:"none",color:'white',borderRadius:'5px',padding:'10px'}}>Cancel</button>
           <button onClick={handleEdit} style={{display:"flex",fontSize:'16px',alignItems:"center",background:"rgba(0, 0, 0, 0.87)",border:"none",color:'white',borderRadius:'5px',padding:'10px'}}>Edit Profile</button>
          </div>
          {/* modal  */}
          {
            open &&
            <Edit open={open} setOpen={setOpen}/>
          }
          </div>
          <div>
            <SiTrustedshops style={{fontSize:"100px",color:"rgba(0, 0, 0, 0.87)"}}/>
          </div>
        </div>
      </div>
      
      );
}

export default Profile
