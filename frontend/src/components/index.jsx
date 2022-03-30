import Favorites from './Favorites/favorites';
import Home from './Home/home';
import MyNotes from './MyNotes/mynotes';
import {Routes, Route} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import OptionBar from './OptionBar/OptionBar';
import React from 'react';
import NotePage from './NotePage/NotePage';
import PageNotFound from './PageNotFound/PageNotFound';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Pages = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <OptionBar />        
      </Grid>
      <Grid item xs={12} md={9}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/note/:id" element={<NotePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Grid>
    </Grid>
  )
};

export default Pages;