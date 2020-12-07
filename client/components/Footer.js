import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(45deg, white 10%, #f85b93 60%, #ff4081 90%)',
    width: '100%',
    position: 'relative',
    height: '2.5em',
  },
  reservedText: {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.3em',
    fontFamily: 'Merienda One',
    marginTop: '45em',
    [theme.breakpoints.down('md')]: {
      marginTop: '60em',
      fontSize: '1.3em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '50em',
      fontSize: '1.2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '35em',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography className={classes.reservedText}>
        All right reserved by{' '}
        <Link
          href="https://seher-development.vercel.app/"
          color="secondary"
          underline="none"
          style={{
            textDecoration: 'none',
            textTransform: 'none',
            color: 'white',
          }}
          target="_blank"
        >
          Seher
        </Link>
      </Typography>
    </footer>
  );
}
