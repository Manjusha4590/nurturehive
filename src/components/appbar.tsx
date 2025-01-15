'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoIcon from '@/components/logoIcon';

const navItems: string[] = ['About Us', 'Services', 'Portfolio', 'Testimonials', 'Blogs'];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});


function HeaderBar(): React.JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // setAnchorEl('');  // Now TypeScript knows this is valid
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseMenu();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box component="header" className="header-main">
        <Box className="header">
          {/* Logo Section */}
          <Box component="section" className="header-section logo-section">
            <Box component="a" href="/" className="logo-container">
              <LogoIcon />
            </Box>
          </Box>

          {/* Middle Section */}
          <Box component="section" className="header-section middle-section" />

          {/* Actions Section */}
          <Box component="section" className="header-section actions-section">
            <Box className="action-item">
              <Button 
              size = "small"
                className="talk-btn"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </Button>
            </Box>
            <Box className="action-item">
              <Button
                className="hamburger-btn"
                // onClick={handleOpenMenu}
              >
                <Image
                  src="/menu 1.svg"
                  alt="menu logo"
                  width={36}
                  height={30}
                  priority
                />
              </Button>
            </Box>
          </Box>

          {/* Navigation Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            className="nav-menu"
          >
            {navItems.map((item) => (
              <MenuItem 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default HeaderBar;

