'use client';

import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HexagonBox, { HexPosition } from './hexagonBox';


// Hex position data
const hexPositions: HexPosition[] = [
  { side: 'left', bottom: '18vw', left: '-1vw', size: 'large', content: 'Search Engine Optimization', marginTop: '303px'  },
  { side: 'left', bottom: '10vw', left: '-5vw', size: 'small', content: '' },
  { side: 'left', bottom: '10vw', left: '5.5vw', size: 'small', content: ' Email Marketing' },
  { side: 'left', bottom: '2.2vw', left: '11vw', size: 'small', content: ' Website Development' },
  { side: 'left', bottom: '2vw', left: '0.5vw', size: 'small', content: 'Mobile App Development' },
  { side: 'right', bottom: '18vw', right: '-1vw', size: 'large', content: 'Social Media Marketing', marginTop: '303px'  },
  { side: 'right', bottom: '10vw', right: '5.5vw', size: 'small', content: 'Pay Per Click' },
  { side: 'right', bottom: '10vw', right: '-5vw', size: 'small', content: '' },
  { side: 'right', bottom: '2.2vw', right: '11vw', size: 'small', content: 'UI / UX Design' },
  { side: 'right', bottom: '2vw', right: '0.5vw', size: 'small', content: 'Content Writing' },
];

interface IntroSectionProps {
  activeHexColor?: string;
}
function IntroSection({ activeHexColor = '#1ae9ab' }: IntroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      scrollSnapAlign: 'start',
      // padding: '4vw',
      width: '100%',         // Add this
      overflow: 'hidden',    // Add this
      boxSizing: 'border-box', // Add this
       minHeight: '100vh'
    }}>
          <Box sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

<Box 
className="hexagon-top"
sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents:'all'
        }}>
      {/* Render all hexagons */}
      {hexPositions.map((position, index) => (
        <HexagonBox 
          key={index} 
          position={position} 
          index={index} 
          activeColor={activeHexColor}
        />
      ))}
</Box>
   {/* Hero Section */}
   <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        textAlign: 'center',
        width: '100%',
        maxWidth: '80%',
        position: 'relative',
      }}>
        <Box sx={{
          display: 'flex',
          maxWidth: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 2,
        }}>
    <Box sx={{ 
    display: 'flex', 
    alignItems: 'center',
    gap: '1.5rem',
  }}>
    <Typography variant="h1" sx={{
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      backdropFilter: 'blur(5px)',
      zIndex: 2,
      color: '#1ae9ab', // Special color for "Digital Marketing" only
    }}
    className='head-text'
    >
      Digital Marketing
    </Typography>
    <Typography variant="h1" sx={{
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      backdropFilter: 'blur(5px)',
      zIndex: 2,
      color: '#000000', // Black color for "is"
    }}
    className='head-text'
    >
    is
    </Typography>
  </Box>
      <Typography variant="h1" className='head-text' sx={{
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        backdropFilter: 'blur(5px)',
        zIndex: 2,
        
      }}>
        Our Thing!
      </Typography>
          
      <Box sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  marginTop:'52px'
}}>
  <Typography className='basic-text'>
    Our digital marketing services nurture your business
  </Typography>
  <Typography className='basic-text'>
    growth by fostering strong customer relationships
  </Typography>
  <Typography className='basic-text'>
   through personalized, strategic campaigns.
  </Typography>
</Box>
          <Button 
            variant="contained" 
             size = "small"
            id="shake"
            onClick={() => scrollToSection('contact')}
            className='audit-btn'
          >
     Get a Free Site Audit!
          </Button>
        </Box>
      </Box>
      </Box>

   
    </Box>
  );
}

export default IntroSection;

