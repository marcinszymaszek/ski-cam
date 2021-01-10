import React, { Fragment, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  makeStyles,
  Card,
  Grid,
  CardHeader,
  CardMedia,
  Typography,
  Container,
  CssBaseline
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardTitle: {
    textAlign: 'center',
    bottom: "0",
  },
  cardHeader: {
    position: "relative",
    color: "#545454"
  },
  subheader: {
    position: "absolute",
    top: "0",
    right: "0",
    color: "#a1a1a1",
    padding: "8px 8px"
  },
  image: {
    width: "100%",
    height: "auto"
  }
}));

const cards = [1, 2];

//Current date
let today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
today = `${day}-${month}-${year}`;

const SkiCams = () => {
  const classes = useStyles();
  const [responseData, setResponseData] = useState("");

  //Fetching data from the API
  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://makevoid-skicams.p.rapidapi.com/cams.json",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "makevoid-skicams.p.rapidapi.com",
        "x-rapidapi-key": "f07d18bbf5mshf4053b8a5f5cf5cp14233ejsnf435406d06d2",
        "useQueryString": true
      }, "params": {
        "language_code": "en"
      }
    })
      .then((response) => {
        setResponseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {responseData &&
            <Grid container spacing={4}>
              {cards.map((card, id) => (
                <Grid item key={card} xs={12} sm={6} md={6} lg={6}>
                  <Card className={classes.card}>
                    <CardHeader
                      className={classes.cardHeader}
                      title={
                        <Typography component={'span'} variant="h4" className={classes.cardTitle}>
                          {id === 0 ? responseData["32"].name :
                            responseData["100"].name}
                        </Typography>
                      }
                      subheader={
                        <Typography component={'span'} variant="h5" className={classes.subheader}>
                          {today}
                        </Typography>
                      }
                    />
                    <CardMedia
                      className={classes.cardMedia}
                      image={id === 0 ? responseData["32"].cams["123"].url :
                        responseData["100"].cams["317"].url}
                    />
                    <CardMedia
                      className={classes.cardMedia}
                      image={id === 0 ? responseData["32"].cams["124"].url :
                        responseData["100"].cams["318"].url}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          }
        </Container>
      </main>
    </Fragment>
  );
}

export default SkiCams;
