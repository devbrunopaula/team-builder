import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers } from '../../redux/Actions'
import { modalTogglePlus } from '../../redux/Actions'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles'
import { v1 as uuidv1 } from 'uuid'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

function AddMemberModal({ toggle }) {
  const defaultState = {
    id: uuidv1(),
    name: '',
    title: '',
    email: '',
  }

  const [alertOpen, setAlertOpen] = useState(false)
  const [formState, setFormState] = useState(defaultState)
  const [errors, setErrors] = useState(defaultState)
  const dispatch = useDispatch()
  const classes = useStyles()
  //Redux
  const toggleStatus = useSelector((state) => state)

  //formState schema
  let formSchema = yup.object().shape({
    name: yup.string().required('Please provide a full name.'),
    email: yup
      .string()
      .required('Please provide a email.')
      .email('This is not a valid email.'),
    title: yup.string().required('Please enter your company title.'),
  })

  const handleClickOpen = () => {
    // if (toggleStatus.addMembersModal) {
    //   console.log('status true')
    // }
    // dispatch(modalTogglePlus())
  }

  const handleClose = () => {
    return dispatch(modalTogglePlus())
  }

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
    validateChange(event)
  }

  const handleSave = (e) => {
    dispatch(modalTogglePlus())
    dispatch(addUsers(formState))
  }
  const formSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted!')
  }

  const validateChange = (e) => {
    //this allows react to keep the event object to play nice with async op
    e.persist()

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) =>
        setErrors({
          ...errors,
          [e.target.name]: '',
        })
      )
      .catch((error) =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        })
      )
  }

  return (
    <Dialog
      open={toggle}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
      fullWidth={true}
      maxWidth='md'
    >
      <DialogTitle id='alert-dialog-slide-title'>
        {'Quick Add Team Member'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          <Grid container>
            <Grid item xs={12} md={8}>
              <form
                className={classes.root}
                Validate
                autoComplete='off'
                onSubmit={formSubmit}
              >
                <TextField
                  autoFocus
                  margin='dense'
                  name='name'
                  label='Full Name'
                  type='text'
                  fullWidth
                  value={formState.name}
                  onChange={handleChange}
                />
                <TextField
                  autoFocus
                  margin='dense'
                  name='title'
                  label='Company Title'
                  type='text'
                  fullWidth
                  value={formState.title}
                  onChange={handleChange}
                />
                <TextField
                  autoFocus
                  margin='dense'
                  name='email'
                  label='Email Address'
                  type='email'
                  value={formState.email}
                  onChange={handleChange}
                  fullWidth
                />
              </form>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>Upload Avatar</Paper>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button type='submit' onClick={handleSave} color='primary'>
          SAVE
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddMemberModal

// <form className={classes.root} Validate autoComplete='off'>
// <TextField
//   autoFocus
//   margin='dense'
//   id='fullname'
//   label='Full Name'
//   type='text'
//   fullWidth
// />
// <TextField
//   autoFocus
//   margin='dense'
//   id='title'
//   label='Comapny Title'
//   type='text'
//   fullWidth
// />
// <TextField
//   autoFocus
//   margin='dense'
//   id='name'
//   label='Email Address'
//   type='email'
//   fullWidth
// />
// </form>
