import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import {
    CardContent,
    CardMedia,
    Grid,
    Typography,
    makeStyles,
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
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    }
}));

const cards = [1, 2, 3];

const AboutUs = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={3}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={4} md={4} lg={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography component={'span'} gutterBottom variant="h4">
                                            Lorem ipsum
                                        </Typography>
                                        <Typography component={'span'} variant="body1">
                                            Sit ex mollit culpa consequat. Est et minim laboris id amet et labore voluptate.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </Fragment>
    );
};

export default AboutUs;
