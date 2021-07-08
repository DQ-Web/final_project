import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  greeting: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    margin: "auto",
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.greeting}>
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default HomePageView;
