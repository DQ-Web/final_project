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
      fnameError: false,
      lnameError: false,
      campusIdError: false,
      emailError: false,
      validEmail: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    const { name, value } = event.target;

    switch (name) {
      case 'firstname':
        this.setState({fnameError: value === '' ? true : false});
        break;
      case 'lastname':
        this.setState({lnameError: value === '' ? true : false});
        break;
      case 'campusId':
        this.setState({campusIdError: value === '' ? true : false});
        break;
      case 'email':
        this.setState({emailError: value === '' ? true : false});

        const emailRegex = /\S+@\S+\.\S+/;
        this.setState({validEmail: !emailRegex.test(value)});
        break;
      default:
        break;
    }
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
        fnameError={this.state.fnameError}
        lnameError={this.state.lnameError}
        campusIdError={this.state.campusIdError}
        emailError={this.state.emailError}
        validEmail={this.state.validEmail}
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
