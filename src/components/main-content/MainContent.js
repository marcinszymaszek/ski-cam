import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png'
import {
  AppBar,
  Typography,
  makeStyles,
  Tabs,
  Tab,
  Box,
  Grid,
  Container,
  CssBaseline
} from '@material-ui/core';
import AboutUs from "../about-us/AboutUs";
import SkiCams from "../ski-cams/SkiCams";
import Contact from "../contact/Contact";

const useStyles = makeStyles((theme) => ({
  active: {
    color: "orange",
  },
  indicator: {
    backgroundColor: "orange"
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
  },
  appBar: {
    color: "#545454",
    backgroundColor: "white"
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MainContent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <CssBaseline />
      <main>
        {/* Navigation bar */}
        <AppBar position="sticky" className={classes.appBar} >
          <Container className={classes.cardGrid} maxWidth="md">
            <div>
              <img src={logo} alt="PGS logo" />
            </div>
            <Grid container >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                classes={{ indicator: classes.indicator }}
              >
                <Tab label="ABOUT US"
                  {...a11yProps(0)}
                  className={value === 0 ? classes.active : ""}
                />
                <Tab label="SKICAMS"
                  {...a11yProps(1)}
                  className={value === 1 ? classes.active : ""}
                />
                <Tab label="CONTACT"
                  {...a11yProps(2)}
                  className={value === 2 ? classes.active : ""}
                />
              </Tabs>
            </Grid>
          </Container>
        </AppBar>
      </main>
      {/* Main pages */}
      <TabPanel value={value} index={0}>
        <AboutUs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SkiCams />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact />
      </TabPanel>
    </Fragment>
  );
}

export default MainContent;
