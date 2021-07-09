import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { EmptyState } from "../EmptyState";

const AllCampusesView = ({ allCampuses, deleteCampus }) => {
  if (!allCampuses.length) {
    return (
      <div>
        <Link to="/newcampus">
          <button>Add New Campus</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
          <button onClick={() => deleteCampus(campus.id)}>Delete</button>
        </div>
      ))}
      <Link to="/newcampus">
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
