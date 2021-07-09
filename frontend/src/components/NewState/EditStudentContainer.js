import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import EditStudent from "./EditStudent";
import { addStudentThunk } from "../../store/thunks";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      campusId: null,
      email: "",
      imageUrl: "",
      gpa: 0.0,
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
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
      campusId: this.state.campusId,
    };
    console.log("student", student);

    let newStudent = await this.props.addStudent(student);

    console.log("newstudent", newStudent);
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: "",
      gpa: 0.0,
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
      <EditStudent
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

export default connect(null, mapDispatch)(EditStudentContainer);
