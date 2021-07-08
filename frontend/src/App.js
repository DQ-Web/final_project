import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
} from "./components/containers";
import { EditCampus, EditStudent } from "./components/common";
import Navbar from "./components/Nav";

// if you create separate components for adding/editing
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/campuses/edit" component={EditCampus} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/students/edit" component={EditStudent} />
      </Switch>
    </div>
  );
};

export default App;
