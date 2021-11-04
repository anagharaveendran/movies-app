import  { Component } from 'react';
import {
 
    Link,
  } from "react-router-dom";
  import {  Typography} from '@mui/material';  

class  BookShow extends Component {
    
    render() { 
        return (<div>
         <div className="backButton">
         
         <Link to="/" className="backButtonLink"> <Typography variant="button" >
             &lt; Back to Home
         </Typography></Link>
        
       </div>
            <h1>Book Show</h1>
           
        </div>  );
    }
}
 
export default  BookShow;