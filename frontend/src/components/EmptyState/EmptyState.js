import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import empty from "../../images/empty.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "calc(100vh - 72px)", //72px for the navbar height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    width: theme.spacing(40),
    float: "right",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  btn: {
    backgroundColor: "#087E8B",
    color: "white",
    marginTop: theme.spacing(4),
    width: theme.spacing(30),
    padding: theme.spacing(1),
  },
}));

const EmptyState = ({ isCampus }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.img} src={empty} alt="not found" />
      <Typography variant="h4">
        There are no {isCampus ? "campuses" : "students"} found at this time.
      </Typography>
      <Link
        to={isCampus ? "/newcampus" : "/newstudent"}
        className={classes.link}
      >
        <Button className={classes.btn}>
          Add {isCampus ? "campus" : "student"}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyState;
