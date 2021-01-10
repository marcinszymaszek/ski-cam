import React, { Fragment, useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
    Button,
    TextField,
    CssBaseline,
    Grid,
    makeStyles,
    Container,
    Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formGrid: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(3),
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(320 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(7),
            marginBottom: theme.spacing(10),
            padding: theme.spacing(8, 8, 8, 8),
        },
    },
    form: {
        width: '100%'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#2196f3",
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        color: "white",
        '&:hover': {
            backgroundColor: "#0e8cf3"
        }
    },
    textField: {
        marginTop: theme.spacing(7)
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    asterisk: {
        color: "#db3131",
        "&$error": {
            color: "#db3131"
        }
    }
}));

const Contact = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [emailValidation, setEmailValidation] = useState([]);
    const [nameValidation, setNameValidation] = useState([]);

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else {
            setName(e.target.value)
        }
    };

    const handleValidation = () => {
        setEmailValidation(["required", "isEmail"])
        setNameValidation(["required"])
    };

    const clearValidation = () => {
        setEmailValidation([])
        setNameValidation([])
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    const requiredNameLabel = <label>Name<span className={classes.asterisk}>*</span></label>;
    const requiredEmailLabel = <label>Email<span className={classes.asterisk}>*</span></label>;

    return (
        <Fragment>
            <main className={classes.layout}>
                <Container fixed className={classes.formGrid} component="main" maxWidth="xs">
                    <CssBaseline />
                    <Paper className={classes.paper} width="75%">
                        <ValidatorForm
                            className={classes.form}
                            onSubmit={handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextValidator
                                        fullWidth
                                        validators={nameValidation}
                                        label={requiredNameLabel}
                                        onChange={e => handleChange(e)}
                                        name="name"
                                        value={name}
                                        errorMessages={['this field is required', 'email is not valid']}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextValidator
                                        fullWidth
                                        validators={emailValidation}
                                        label={requiredEmailLabel}
                                        onChange={e => handleChange(e)}
                                        name="email"
                                        value={email}
                                        errorMessages={['this field is required', 'email is not valid']}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Message"
                                        multiline
                                        rowsMax={4}
                                        fullWidth
                                        className={classes.textField}
                                    />
                                </Grid>
                            </Grid>
                            <div className={classes.buttonContainer}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={handleValidation}
                                    onBlur={clearValidation}
                                    className={classes.submit}>
                                    SEND
                            </Button>
                            </div>
                        </ValidatorForm>
                    </Paper>
                </Container>
            </main>
        </Fragment >
    );
}

export default Contact;
