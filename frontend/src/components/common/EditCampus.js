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
  },
  title: {
    fontWeight: "bold",
    marginTop: theme.spacing(2.5),
  },
  btn: {
    backgroundColor: "#087E8B",
    color: "white",
    margin: theme.spacing(2.5),
    width: theme.spacing(20),
  },
}));

const EditCampus = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${classes.root}`}>
      <Paper className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Create New Campus
        </Typography>
        <form className={classes.formContainer}>
          <div style={{ display: "flex" }}>
            <TextField required id="name" label="Name" />
            <TextField
              id="imageUrl"
              label="Profile Image"
              helperText="use an image URL"
            />
            <TextField
              multiline
              id="description"
              label="Description"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <Typography style={{ marginTop: "1rem", fontSize: "18px" }}>
              Address:
            </Typography>
            <TextField required id="line1" label="line1" />
            <TextField id="line2" label="line2" />
            <TextField required id="city" label="city" />
            <TextField required id="state" label="state" />
            <TextField required id="zip" label="zip" />
          </div>
        </form>

        <Button className={classes.btn}>Submit</Button>
      </Paper>
    </div>
  );
};

export default EditCampus;
