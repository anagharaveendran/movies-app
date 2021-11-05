import { Button } from '@mui/material';
import { Component } from 'react';
 import { Link, Switch, Route } from 'react-router-dom';
import BookShow from '../../screens/bookshow/BookShow';
import Details from '../../screens/details/Details';
import Home from '../../screens/home/Home';
import './Header.css';
import ReactLogo from './logo.svg';

class Header extends Component {
    
  
    render() { 
        return (<><div className="header">
            <img src={ReactLogo} alt="Logo" className="logo" />
           
             
           <Link to="/"></Link> 
           <Link to="/details"></Link>
           <div className="btnDiv">
           <Link to="/bookshow" className="booLink"><Button variant="contained">Book Show</Button></Link> 
          
           <Button>Login</Button>
           </div>
           </div>
         
            <Switch>    
           <Route exact path="/" ><Home/></Route> 
   
            <Route path="/bookshow" ><BookShow/></Route> 
              <Route path="/details" ><Details /></Route>        
                       
                  </Switch> 
                 </>
          
            
           
            
          
              );
    }
}
 
export default Header;