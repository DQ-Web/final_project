import PropTypes from "prop-types";
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
import { makeStyles } from "@material-ui/core/styles";
// import { EmptyState } from "../EmptyState";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const AllCampusesView = ({allCampuses, deleteCampus}) => {
  const classes = useStyles();
  if (!allCampuses.length) {
    return (
      <div>
        <Link to="/newcampus">
          <button>Add New Campus</button>
        </Link>
      </div>
    );
  }

  return (
    <Container className={classes.container}>
      <Grid direction="column" style={{width:"100%"}} justify="center" container item xs={12} md={12} lg={12}>
        <List dense={true}>
          {allCampuses.map((campus) => (
            <ListItem key={campus.id}>
              <ListItemAvatar>
                <Avatar>
                  🏫
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Link to={`/campus/${campus.id}`}>
                  <h1>{campus.name}</h1>
                  <p>{campus.description}</p>
                </Link>
              </ListItemText>
              <ListItemSecondaryAction>
                <div onClick={() => deleteCampus(campus.id)}>
                  <IconButton>
                    <DeleteIcon/>
                  </IconButton>
                </div>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Link to='campus/new'>
          <Button variant='contained' color='primary'>Add New Campus</Button>
        </Link>
      </Grid>
    </Container>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
