import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    width: "100%",
  },
  img: {
    maxWidth: theme.spacing(30),
    marginBottom: theme.spacing(5),
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
}));

const StudentView = ({ student }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <img
            className={classes.img}
            src={student.imageUrl}
            alt={student.name}
          />
        </Grid>

        <Grid item>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            {student.firstname} {student.lastname}
          </Typography>

          {student.campus ? (
            <Link
              to={`/campus/${student.campus.id}`}
              style={{ textDecoration: "none" }}
            >
              <Typography className={classes.description}>
                {student.campus.name}
              </Typography>
            </Link>
          ) : (
            <Typography className={classes.description}>
              Not enrolled in a campus
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentView;
