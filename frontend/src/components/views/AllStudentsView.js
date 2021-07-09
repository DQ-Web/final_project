import { Link } from "react-router-dom";
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
  Container
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;

  // if (!props.allStudents.length) {
  //   return <EmptyState />;
  // }
  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`student/new`}>
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }

  return (
    <Container maxWidth='md'>
      <Grid>
        <List>
          {students.map((student) => {
            let name = student.firstname + " " + student.lastname;
            return (
              <ListItem key={student.id}> 
                <ListItemAvatar>
                  <Avatar>
                    👩‍🎓
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Link to={`/student/${student.id}`}>
                    <h1>{name}</h1>
                  </Link>
                </ListItemText>
                <ListItemSecondaryAction>
                  <div onClick={() => deleteStudent(student.id)}>
                    <IconButton>
                      <DeleteIcon/>
                    </IconButton>
                  </div>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <Link to={`/newstudent`}>
          <Button variant='contained' color='primary'>Add New Student</Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default AllStudentsView;
