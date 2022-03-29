import React from 'react';
import logo from '../../assets/logo.jpg';
import {Paper, Typography} from '@material-ui/core';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Paper variant='outlined' className={classes.header} elevation={3}>
      <img src={logo} alt="noteX logo" height={100} />
      <Typography variant='h3'>NoteX</Typography>
    </Paper>
  )
}

export default Header;