import { Box, Typography } from '@mui/material';

export interface HexPosition {
  bottom: string;
  left?: string;
  right?: string;
  size: 'large' | 'small';
  content: string;
  side: 'left' | 'right';
  marginTop?: string;
}

interface HexagonBoxProps {
  position: HexPosition;
  index: number;
  activeColor?: string;
}

const HexagonBox = ({ position, index, activeColor = '#1ae9ab' }: HexagonBoxProps) => {
  const isActive = index === 1 || index === 7;
  const hexColor = isActive ? activeColor : 'white';
  const borderColor = isActive ? activeColor : 'black';
  
  return (
    <Box sx={{
      position: 'absolute',
      zIndex: 0,
      transition: 'filter 0.3s ease',
      marginTop: position.marginTop || '0',
      bottom: position.bottom,
      ...(position.left && { left: position.left }),
      ...(position.right && { right: position.right }),
      height: position.size === 'large' ? '13vw' : '10vw',
      width: position.size === 'large' ? '13vw' : '10vw',
      '&:hover': {
        filter: 'drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5))',
      },
    }}>
      <Box sx={{
        height: '100%',
        backgroundColor: borderColor,
        clipPath: 'polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box sx={{
          width: '98%',
          height: '98%',
          clipPath: 'polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: hexColor,
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
        }}>
          <Typography 
          // className='hex-text'
          sx={{
            textAlign: 'center',
            fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
            width: '20ch',
            textWrap: 'wrap',
            color: isActive ? activeColor : 'inherit',
          }}>
            {position.content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HexagonBox;