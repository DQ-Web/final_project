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

const EditStudent = ({ handleChange, handleSubmit, isEdit }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${classes.root}`}>
      <Paper className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          {isEdit ? "Edit" : "Create New"} Student
        </Typography>
        <form
          className={classes.formContainer}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <TextField
              required
              name="firstname"
              label="First Name"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              required
              name="lastname"
              label="Last Name"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              required
              name="campusId"
              label="Campus Id"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <TextField
            required
            name="email"
            label="Email"
            style={{ width: "100%" }}
            onChange={(e) => handleChange(e)}
          />
          <div style={{ display: "flex" }}>
            <TextField
              name="imageUrl"
              label="Profile Image"
              helperText="use an image URL"
              style={{ width: "70%" }}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              name="gpa"
              label="GPA"
              style={{ width: "30%" }}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <Button className={classes.btn} type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default EditStudent;
