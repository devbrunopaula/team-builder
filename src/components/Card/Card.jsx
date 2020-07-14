import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    margin: '0 auto',
  },
})

//
export default function SimpleCard({ data }) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  console.log('card', data)
  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar
          alt='Remy Sharp'
          src='https://i.pravatar.cc/300'
          className={classes.large}
        />
        <Typography align='center' variant='h4'>
          {data.name}
        </Typography>
        <Typography align='center' variant='h5'>
          {data.title}
        </Typography>
        <Typography align='center' variant='h6'>
          {data.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
