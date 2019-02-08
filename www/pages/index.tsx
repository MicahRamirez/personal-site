import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid  from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';


import ThemeRoot from '../lib/theme';

export default () => (
   <ThemeRoot>
     <Grid container>
      <AppBar>
        <p>test</p>
      </AppBar>
          <Grid item xs={12}>
              <Paper>
                {'yay'}
              </Paper>
          </Grid>
      </Grid>
    </ThemeRoot>
)