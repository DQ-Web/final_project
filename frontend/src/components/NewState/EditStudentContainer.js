import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import EditStudent from "./EditStudent";
import { addStudentThunk, editStudentThunk } from "../../store/thunks";

const defaultImg =
  "https://347xj63da3uu3x11jfmmklg9-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/7.png";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      campusId: null,
      email: "",
      imageUrl: defaultImg,
      gpa: 0.0,
      redirect: false,
      redirectId: null,
      id: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const path = window.location.pathname;
    const isEdit = path.includes("edit");
    const id = path.slice(9, 10);

    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
      campusId: this.state.campusId,
      id: isEdit ? id : null,
    };

    let newStudent = (await isEdit)
      ? this.props.editStudent(student)
      : this.props.addStudent(student);

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: defaultImg,
      gpa: 0.0,
      campusId: null,
      redirect: true,
      redirectId: isEdit ? id : newStudent.id,
      id: null,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    const isEdit = window.location.pathname.includes("edit");

    return this.state.redirect ? (
      <Redirect to={`/student/${this.state.redirectId}`} />
    ) : (
      <EditStudent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isEdit={isEdit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(EditStudentContainer);
