import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_NOTES} from '../../constants/queries.js'
import {Paper, Typography} from '@material-ui/core';
import useStyles from './styles.js';
import NoteFeed from './NoteFeed/NoteFeed.jsx';

const Home = () => {
  const classes = useStyles();
  
  const {data, loading, error, fetchMore} = useQuery(GET_NOTES);
 
  return ( 
    <Paper className={classes.paper}>
      <Typography variant='h3'>Home</Typography>
      <hr />
      {error ? <p>An error has ocurred!</p>
        : loading ? <p>Loading...</p>
        : <NoteFeed data={data} fetchMore={fetchMore} />}
    </Paper>
  );
};

export default Home;