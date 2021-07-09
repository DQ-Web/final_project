import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import EditCampus from "./EditCampus";
import {
  addCampusThunk,
  editCampusThunk,
  fetchCampusThunk,
} from "../../store/thunks";

const defaultImg = "https://image.flaticon.com/icons/png/512/170/170427.png";

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      imageUrl: defaultImg,
      description: "",
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
    const id = path.slice(8, 9);

    let campus = {
      name: this.state.name,
      address: this.state.address,
      imageUrl: this.state.imageUrl,
      description: this.state.description,
      id: isEdit ? id : null,
    };

    console.log(campus);

    let newCampus = (await isEdit)
      ? this.props.editCampus(campus)
      : this.props.addCampus(campus);

    this.setState({
      name: "",
      address: "",
      imageUrl: defaultImg,
      description: "",
      redirect: true,
      redirectId: isEdit ? id : newCampus.id,
      id: null,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    const isEdit = window.location.pathname.includes("edit");

    return this.state.redirect ? (
      <Redirect to={`/campus/${this.state.redirectId}`} />
    ) : (
      <EditCampus
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isEdit={isEdit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
    fetchCampus: (campusId) => dispatch(fetchCampusThunk(campusId)),
  };
};

export default connect(null, mapDispatch)(EditCampusContainer);
