import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  Container,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { EmptyState } from "../EmptyState";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#087E8B",
    color: "white",
    marginTop: theme.spacing(4),
    width: theme.spacing(30),
    padding: theme.spacing(1),
  },
}));

const AllStudentsView = (props) => {
  const classes = useStyles();
  const { students, deleteStudent } = props;

  if (!students.length) {
    return <EmptyState />;
  }

  return (
    <Container maxWidth="md">
      <Grid>
        <List>
          {students.map((student) => {
            let name = student.firstname + " " + student.lastname;
            return (
              <ListItem key={student.id}>
                <ListItemAvatar>
                  <Avatar>👩‍🎓</Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Link to={`/student/${student.id}`}>
                    <h1>{name}</h1>
                  </Link>
                </ListItemText>
                <ListItemSecondaryAction>
                  <div onClick={() => deleteStudent(student.id)}>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <Link to={`/newstudent`} style={{ textDecoration: "none" }}>
          <Button className={classes.btn}>Add New Student</Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default AllStudentsView;
