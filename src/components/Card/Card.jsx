import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import AddMemberModal from '../Modal/AddModal'
import { useDispatch, useSelector } from 'react-redux'
import { modalTogglePlus } from '../../redux/Actions'

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

  const toggle = useSelector((state) => state.toggle)
  const dispatch = useDispatch()

  const editHandle = () => {
    console.log(123)
    dispatch(modalTogglePlus())
  }

  return (
    <Card className={classes.root}>
      <AddMemberModal toggle={toggle.AddMemberModal} />
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
        <Button onClick={editHandle} size='small'>
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}
