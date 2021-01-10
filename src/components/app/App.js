import React, { Fragment } from 'react';
import MainContent from "../main-content/MainContent";
import Footer from "../footer/Footer";
import { makeStyles, CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f3f3f3",
    position: "relative",
    minHeight: "100vh"
  },
  contentWrap: {
    paddingBottom: "10rem"
  }
}));

const theme = createMuiTheme();

theme.typography.h4 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.6rem',
  },
};

theme.typography.h5 = {
  fontWeight: "normal",
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  }
};

theme.typography.h6 = {
  fontWeight: "normal",
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  }
};

theme.typography.body1 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  }
};

const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <MainContent />
          <div className={classes.contentWrap}>
          </div>
          <Footer />
        </ThemeProvider>
      </div>
    </Fragment>
  );
}

export default App;
