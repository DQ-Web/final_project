import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NewStudentView from "../views/NewStudentView";
import { addStudentThunk } from "../../store/thunks";

class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      campusId: null,
      email: "",
      redirect: false,
      redirectId: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: "email@email.com",
      campusId: this.state.campusId,
    };
    console.log("student", student);

    let newStudent = await this.props.addStudent(student);

    console.log("newstudent", newStudent);
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      campusId: null,
      redirect: true,
      redirectId: newStudent.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }
    return (
      <NewStudentView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(NewStudentContainer);
