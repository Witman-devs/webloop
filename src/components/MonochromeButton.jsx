import { Button } from '@mui/material';
import { styled } from '@mui/system';

const MonochromeButton = styled(Button)(({ theme }) => ({
  color: 'black',
  border: '1px solid black',
  backgroundColor: 'transparent',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'color 0.3s ease, transform 0.1s ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: 0,
    backgroundColor: 'black',
    zIndex: -1,
    transition: 'width 0.4s ease',
  },

  '&:hover': {
    color: 'white',
  },

  '&:hover::before': {
    width: '100%',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export default MonochromeButton;
