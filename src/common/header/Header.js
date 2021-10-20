import { Component } from 'react';
import './Header.css';
import ReactLogo from './logo.svg';
class Header extends Component {
    
  
    render() { 
        return (<div className="header">
            <img src={ReactLogo} alt="Logo" className="logo" />
            </div>  );
    }
}
 
export default Header;