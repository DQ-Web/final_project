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
  Container,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { EmptyState } from "../EmptyState";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "#087E8B",
    color: "white",
    marginTop: theme.spacing(4),
    width: theme.spacing(30),
    padding: theme.spacing(1),
  },
}));

const AllCampusesView = ({ allCampuses, deleteCampus }) => {
  const classes = useStyles();
  if (!allCampuses.length) {
    return <EmptyState isCampus />;
  }

  return (
    <Container className={classes.container}>
      <Grid
        direction="column"
        style={{ width: "100%" }}
        justify="center"
        container
        item
        xs={12}
        md={12}
        lg={12}
      >
        <List dense={true}>
          {allCampuses.map((campus) => (
            <ListItem key={campus.id}>
              <ListItemAvatar>
                <Avatar>🏫</Avatar>
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
                    <DeleteIcon />
                  </IconButton>
                </div>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Link to="/newcampus" style={{ textDecoration: "none" }}>
          <Button className={classes.btn}>Add New Campus</Button>
        </Link>
      </Grid>
    </Container>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
