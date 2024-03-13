import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import '../styles/Navbar2.css'
import  data from '../data.json'

export const NavbarComplete = () => {

  const onclickButton = () =>{
  console.log(data);
  }



    return (
      <div className="navbar2">
        <Link to='/'>
        <img src={logo} className='imgLogo'/>
        </Link>
        <div className='navbarButtons2'> 
            <button onClick={onclickButton}>General</button>
            <button>Boards</button>
            <button>Si</button>
            <button>Memory</button>
            <button>Equipment</button>
            <button>Picoprobes</button>
            <button>Bitacora Picoprobes</button>
        </div>
        

      </div>
    );
  }
  
  