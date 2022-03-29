import React from 'react';
import {Card, CardActions, CardContent, Grid, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles.js';

const NoteFeed = ({data, fetchMore}) => {
  const classes = useStyles();
  const {notes, hasNextPage} = data.noteFeed;
  const handleNext = () => fetchMore({
    variables: {
      cursor: data.noteFeed.cursor
    },
    updateQuery: (previousResult, {fetchMoreResult}) => ({
      noteFeed: {
        cursor: fetchMoreResult.noteFeed.cursor,
        hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
        notes: [...previousResult.noteFeed.notes, ...fetchMoreResult.noteFeed.notes],
        __typename: "noteFeed"
      }
    })
  });

  return (
    <Grid container spacing={2}>
        {console.log(notes)}
        {notes.map(n => 
          <Grid item xs={12} md={6} key={n.id}>
            <Link to={`note/${n.id}`}>
              <Card variant="outlined" elevation={5} className={classes.card}>
                <CardContent>
                  <Typography variant='h5' align='center'>{n.title}</Typography><br />
                  {n.content}
                </CardContent>
                <CardActions><p>{n.author.username}</p>&nbsp;<p>{n.createdAt.substring(0, 10)}</p></CardActions>            
              </Card>
            </Link>
          </Grid>)}

        {hasNextPage && (<><Button onClick={handleNext} variant="contained" color='primary'>Load More</Button></>)}
    </Grid>
  )
}

export default NoteFeed;