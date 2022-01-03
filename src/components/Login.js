import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import bg from '../assets/img/bg.png'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url(${bg})'
    }
}))

function login() {
    const classes = useStyles()

    return (
        <Grid container component='main' className={classes.root}>

        </Grid>
    )
}

export default login
