
import React,{useState, useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './navbar.css';
import { Button } from './Button';
import logo from '../images/logo.png';


function Navbar() {
    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate();

      useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset >= isSticky) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };})
      
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
      
      window.addEventListener('resize', showButton);

      const handleSignUpClick = () => {
        closeMobileMenu();
       navigate('/login');
      };
      
    return (
    <div>
        
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className='navbar-container'>
         <Link to="/" className='navbar-logo'>
       <img src={logo} alt='logo' width={200} height={50} />  
        </Link>   
        <div className='menu-icon' onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Aboutus' className='nav-links' onClick={closeMobileMenu}>About</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Productpage' className='nav-links' onClick={closeMobileMenu}>Products</Link>
            </li>
            
            <Link
                to='/login'
                className='nav-links-mobile'
                onClick={handleSignUpClick}
              >
                Login
              </Link>
        </ul>
        
        {button && <Button buttonStyle='btn--outline' onClick={handleSignUpClick}>Login</Button>}&nbsp;&nbsp;
        <button style={{border:'none'}} onClick="">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>
        </button>
        </div>
        {/* <div className='FloatingCtaButton_FloatingCtaBtn__doEWb FloatingCtaButton_animateBottom__2upC0 null'>
          <div className="FloatingCtaButton_FloatingCtaBtn__container__9ah6Q">
            <div className="FloatingCtaButton_FloatingCtaBtn__txt__VtyvL">
            </div>
            <button type="button" class="btn FloatingCtaButton_FloatingCtaBtn__btn__6tDFd Button_button__PjVhEButton_theme-primary__Yf4nxButton_size-medium__T06bh Button_width-full__rpERu">Start Assessment
            </button>
          
            </div>  
          </div>*/}
      </nav>
    </div>
  );
}
export default Navbar;
