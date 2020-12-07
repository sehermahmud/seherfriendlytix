import React, { useState } from 'react';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardContent, useMediaQuery } from '@material-ui/core';

import useRequest from '../../hooks/use-request';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

const NewTicket = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card elevation={2} style={{ marginTop: '2em' }}>
        <CardContent>
          <div
            className={classes.paper}
            style={{
              marginRight: '1em',
              marginLeft: '1em',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            }}
          >
            <Typography component="h1" variant="h5">
              Create Ticket
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="ticket name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Price"
                onBlur={onBlur}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <br />
              <br />
              <Typography style={{ color: '#757575' }}>
                wait! are you sure? , check it again if you not!
              </Typography>
              {errors}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
              >
                Sell Ticket
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewTicket;
