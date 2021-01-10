import React, { Fragment } from 'react';
import {
    Typography,
    makeStyles,
    CssBaseline
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#282828",
        padding: "48px 0px",
        color: "#a1a1a1",
        position: "absolute",
        bottom: "0",
        width: "100%"
    },
    footerLine: {
        height: "1px",
        [theme.breakpoints.down('sm')]: {
            width: "17rem",
        },
        [theme.breakpoints.up('md')]: {
            width: "28rem",
        },
        [theme.breakpoints.up('lg')]: {
            width: "30rem",
        },
        borderWidth: "0",
        backgroundColor: "#a1a1a1"
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <footer className={classes.footer}>
                <Typography gutterBottom variant="h6" align="center" >
                    <hr className={classes.footerLine} />
                     Powered by PGS
                </Typography>
            </footer>
        </Fragment>
    );
}

export default Footer;
