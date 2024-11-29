"use client"

import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { VscSearch } from "react-icons/vsc";
import { FaRegWindowMinimize } from "react-icons/fa";
import { FiMaximize } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

export default function Header() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  

    return (
      <header className="header">        
        <div className="logo">
          <Image
            src="/vscode.svg"
            alt="vscode logomark"
            width={20}
            height={20}
          />
          <nav className="navbar">
            <ul>
              <li><a href="#file">File</a></li> 
              <li><a href="#edit">Edit</a></li>
              <li><a href="#selection">Selection</a></li>
              <li><a href="#view">View</a></li>
              <li><a href="#go">Go</a></li>
              <li><a href="#run">Run</a></li>
              <li><a href="#terminal">Terminal</a></li>
            </ul>
          </nav>
        </div>
        <div className="palletteParent">
          <LuArrowLeft />
          <LuArrowRight />          
          <div className="cmdPallette">                        
            <Button variant="outlined" className="palBtn">              
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot">
                <Avatar alt="Remy Sharp" src="/propic.jpg" sx={{ width: 25, height: 25 }}/>
              </StyledBadge>
              <VscSearch className="marginVsc"/>gaurav saroha
            </Button>
          </div>
        </div>
        <div className="rightAligned">
          <FaRegWindowMinimize />
          <FiMaximize />
          <IoCloseSharp className="closeIcon"/>
        </div>        
      </header>
    );
  }
  