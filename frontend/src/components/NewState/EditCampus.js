import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    width: "100%",
    height: "calc(100vh - 72px)", //72px for the navbar height
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  formContainer: {
    margin: theme.spacing(4),
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    marginTop: theme.spacing(2.5),
  },
  btn: {
    backgroundColor: "#087E8B",
    color: "white",
    margin: theme.spacing(5, 2.5, 0),
    width: theme.spacing(20),
  },
}));

const EditCampus = ({ handleChange, handleSubmit, isEdit, nameError, addressError }) => {
  const classes = useStyles();

  const nameHelperText = 'Name cannot be empty';
  const addressHelperText = 'Address cannot be empty';

  return (
    <div className={`${classes.container} ${classes.root}`}>
      <Paper className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          {isEdit ? "Edit" : "Create New"} Campus
        </Typography>
        <form
          className={classes.formContainer}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div style={{ display: "flex" }}>
            <TextField
              error={nameError}
              helperText={nameError && nameHelperText}
              required
              name="name"
              label="Name"
              style={{ width: "50%" }}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              name="imageUrl"
              label="Profile Image"
              helperText="use an image URL"
              style={{ width: "50%" }}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <TextField
            error={addressError}
            helperText={addressError && addressHelperText}
            required
            name="address"
            label="Address"
            style={{ width: "100%" }}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            multiline
            name="description"
            label="Description"
            style={{ width: "100%" }}
            onChange={(e) => handleChange(e)}
          />
          <Button className={classes.btn} type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default EditCampus;
