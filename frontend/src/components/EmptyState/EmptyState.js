import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
}));

const EmptyState = ({ campus }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.img} src={empty} alt="not found" />
      <Typography variant="h4">
        There are no {campus ? "campuses" : "students"} found at this time.
      </Typography>
    </div>
  );
};

export default EmptyState;
