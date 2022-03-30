import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    paper: {
      borderRadius: 15,
      padding: '10px',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'space-between',
      background: '#888',
      color: 'black',
      border: '2px solid white'  
    },
    header: {
        color: '#FFF'
    },
    input: {
        margin: '10px 0 10px 0'
    },
    button: {
      marginTop: '10px'
    }
  }));