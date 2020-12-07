import { useState, useEffect } from 'react';
import Router from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Input, Paper } from '@material-ui/core';
import useRequest from '../../hooks/use-request';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 'none',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: '2em',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper} style={{ background: 'none' }}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon color="disabled" style={{ margin: '30px' }} />
        </Avatar>
        <Grid
          container
          justify="center"
          style={{ marginTop: '2em', marginBottom: '1.5em' }}
        >
          <Grid item>
            <Link href="/auth/signup" variant="body2">
              Are you New here? Don't worry just Sign Up
            </Link>
          </Grid>
        </Grid>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type={password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                placeholder="Password"
              />
            </Grid>
          </Grid>
          {errors}
          <Button
            onClick={onSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
