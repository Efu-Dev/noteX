import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    paper: {
      borderRadius: 15,
      padding: '10px',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'space-between',
      background: '#000',
      color: 'white',
      border: '2px solid white'  
    },
    button: {
      marginTop: '10px'
    }
  }));