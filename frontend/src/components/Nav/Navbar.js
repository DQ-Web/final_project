import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "Courier, sans-serif",
    fontSize: "35px",
    color: "#FF5A5F",
    textDecoration: "none",
  },
  appBar: {
    backgroundColor: "#0B3954",
    shadows: ["none"],
    marginBottom: theme.spacing(1),
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    width: "50%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
  },
  btn: {
    backgroundColor: "#087E8B",
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.title} color="inherit">
            CRUD App
          </Link>

          <Link className={classes.links} to="/campuses">
            <Button
              variant="contained"
              className={classes.btn}
              style={{ marginRight: "10px" }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to="/students">
            <Button variant="contained" className={classes.btn}>
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
