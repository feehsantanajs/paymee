import { slide as Menu } from 'react-burger-menu'
import { GiHamburgerMenu } from 'react-icons/gi';

import './styles.scss'
export function BurgerMenu(){
 
  return (
    <Menu width={ '20%' } customBurgerIcon={ <GiHamburgerMenu /> } >
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    
    </Menu>
  );

}