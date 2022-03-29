import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Note from '@material-ui/icons/Note';
import Stars from '@material-ui/icons/Stars';
import {Button, Paper} from '@material-ui/core';
import useStyles from './styles.js';

const OptionBar = () => {

    const classes = useStyles();
    
    return (
        <Paper className={classes.paper}>
            <Button color='primary' variant="contained" fullWidth className={classes.button}><HomeIcon />&nbsp;<b>Home</b></Button>
            <Button variant="contained" fullWidth className={classes.button}><Note />&nbsp;<b>My Notes</b></Button>
            <Button color='secondary' variant="contained" fullWidth className={classes.button}><Stars />&nbsp;<b>Favourites</b></Button>
        </Paper> 
    )
};

export default OptionBar;