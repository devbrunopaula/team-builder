import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import Test from './components/Test/Test'

const App = () => {
  return (
    <>
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
          <Test />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper>
          <Test />
        </Paper>
      </Grid>
    </>
  )
}

export default App
