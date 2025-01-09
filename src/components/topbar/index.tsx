import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ThemeContext } from '@/context/ThemeContext';


export default function TopBar() {
  
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      // <div className="fixed pr-2 top-0 right-0 z-50 mb-2 text-white">
      <div>
        <IconButton onClick={toggleTheme} className="text-white">
          {theme === 'dark' ? (
            <DarkModeOutlinedIcon className='text-white' />
          ) : (
            <LightModeOutlinedIcon className='text-black' />
          )}
        </IconButton>
      </div>
    );
};

