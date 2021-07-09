import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import EditCampus from "./EditCampus";
import { addCampusThunk } from "../../store/thunks";

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      imageUrl: "",
      description: "",
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

    let campus = {
      name: this.state.name,
      address: this.state.address,
      imageUrl: this.state.imageUrl,
      description: this.state.description,
    };

    let newCampus = await this.props.addCampus(campus);

    this.setState({
      name: "",
      address: "",
      imageUrl: "",
      description: "",
      redirect: true,
      redirectId: newCampus.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to={`/campus/${this.state.redirectId}`} />
    ) : (
      <EditCampus
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  };
};

export default connect(null, mapDispatch)(EditCampusContainer);
