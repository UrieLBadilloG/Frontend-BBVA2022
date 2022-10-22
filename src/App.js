import './styles/styleGrid.css';
import AppNav from './components/AppNav';
import ComplexGrid from './components/main'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import LoadingButtonsTransition from './components/step.jsx';
function App() {
  return (
  <Box className='container'>
      <Grid className='item item1'>
        <AppNav />
      </Grid>
      <Grid className='item item2'>
        <ComplexGrid />
      </Grid>
      <Grid className='item item3'>
      <IconButton className='progress'>
        <ArrowDownwardIcon />
      </IconButton>
      </Grid>
      
  </Box>
  );
}

export default App;
