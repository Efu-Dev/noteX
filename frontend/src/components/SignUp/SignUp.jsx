import React, { useEffect, useState } from 'react'
import {Paper, TextField, FormControl, FilledInput, InputLabel,
        InputAdornment, IconButton, Button, Typography} from '@material-ui/core';
import {VisibilityOff, Visibility} from '@material-ui/icons';
import useStyles from './styles';

const SignUp = () => {

    const [values, setValues] = useState({username: '', password: '', email: '', showPassword: false});
    const classes = useStyles();

    useEffect(() => {
        document.title = "NoteX - Sign Up";
    }, []);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };

    return (
        <Paper className={classes.paper}>
            <Typography variant='h2' align='center'>SignUp</Typography>
            <FormControl fullWidth>
                <TextField id="username" label="Username" variant="filled" className={classes.input}
                    value={values.username} onChange={handleChange('username')} fullWidth
                />

                <TextField id="email" label="Email" variant="filled" className={classes.input}
                    value={values.email} onChange={handleChange('email')} fullWidth
                />

                <FormControl fullWidth variant='filled' className={classes.input}>
                    <FilledInput
                        id="password"
                        variant="filled"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        fullWidth
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={(event) => {event.preventDefault()}}
                                    edge="end"
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <InputLabel htmlFor="password">Password</InputLabel>
                </FormControl>

                <Button color='primary' variant='contained' fullWidth type='submit'>Submit</Button>
            </FormControl>            
        </Paper>
        
    )
}

export default SignUp