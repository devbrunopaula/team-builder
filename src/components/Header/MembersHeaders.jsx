import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

// Material UI Theme Styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function MembersHeaders() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item lg={10}>
          <Typography variant='p'>7 Members</Typography>
        </Grid>

        <Grid item lg={2}>
          test
        </Grid>
      </Grid>
    </div>
  )
}

export default MembersHeaders
