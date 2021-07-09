import { Button, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BookLover from '../../images/undraw_book_lover_mkck.svg'
const useStyles = makeStyles((theme) => ({
  greeting: {
    textAlign: 'center',
    display: 'flex',
    maxWidth: '100%',
  },
  center: {
    textAlign: 'center',
  },
  welcomInfo: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  masthead: {
    display: 'flex',
    alignItems: 'center',
    height: '88vh',
    justifyContent: 'center'
  }
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.masthead}>
      <Container maxWidth='lg'>
        <Grid container >
          <Grid item xs={6}>
            <img style={{width: '100%'}} src={BookLover} alt="book lover" />
          </Grid>
          <Grid item xs={6}>
            <div className={classes.welcomInfo}>
              <div className={classes.center}>
                <h1>Welcome to Student-Campus Manager</h1>
                <Grid container spacing={2} className={classes.greeting}>
                  <Grid item xs={6}>
                    <Link to='/campuses'>
                      <Button variant='contained' color='primary'>Campuses</Button>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link to='/students'>
                      <Button variant='contained' color='primary'>Students</Button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePageView; 
