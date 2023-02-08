import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg';
import {BsCart2} from 'react-icons/bs'
import {HiOutlineBar3} from 'react-icons/hi2'
import {Box, Drawer, ListItem, ListItemButton, ListItemText, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'; 
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon  from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon  from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';




const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text:'Home',
      icon: <HomeIcon/>
    },
    {
      text:'About',
      icon: <InfoIcon/>
    },
    {
      text:'Testimonials',
      icon: <CommentRoundedIcon/>
    },
    {
      text:'Contact',
      icon: <PhoneRoundedIcon/>
    },
    {
      text:'Cart',
      icon: <ShoppingCartRoundedIcon/>
    }
  ];
  
  return (
  <nav>   
    <div className='nav-logo-container'>
      <img src={Logo} alt='Logo'> </img>
    </div>

    <div className='nav-links-container'>
      <a href=''>Home </a>
      <a href=''>About</a>
      <a href=''>Testimonials</a>
      <a href=''>Contact</a>
      <a href=''>
        <BsCart2 className='nav-cart-icon'/>
      </a>
    </div>


  </nav>
  )
}

export default Navbar