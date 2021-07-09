import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    width: "100%",
  },
  img: {
    maxWidth: theme.spacing(30),
    marginBottom: theme.spacing(1),
  },
  description: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6.5),
    fontSize: theme.spacing(2.5),
    textAlign: "center",
  },
  emptyState: {
    textAlign: "center",
    fontStyle: "italic",
  },
  btn: {
    textDecoration: "none",
    width: "100%",
  },
}));

const CampusView = ({ campus, deleteCampus, editCampus }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <img
            className={classes.img}
            src={campus.imageUrl}
            alt={campus.name}
          />
        </Grid>

        <Grid container item justify="center" style={{ marginBottom: "40px" }}>
          <Grid item>
            <Link to={`/campus/${campus.id}/edit`} className={classes.btn}>
              <Button>Edit</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/campuses" className={classes.btn}>
              <Button onClick={() => deleteCampus(campus.id)}>Delete</Button>
            </Link>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            {campus.name}
          </Typography>
          <div>
            <Typography className={classes.description}>
              {campus.description}
            </Typography>
          </div>
          {campus.students.length === 0 ? (
            <Typography className={classes.emptyState}>
              0 students enrolled
            </Typography>
          ) : (
            <ul>
              {campus.students.map((student) => {
                let name = student.firstname + " " + student.lastname;
                return (
                  <li key={student.id}>
                    <Link
                      to={`/student/${student.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CampusView;
