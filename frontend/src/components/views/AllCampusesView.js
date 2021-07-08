import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { EmptyState } from "../EmptyState";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <EmptyState campus />;
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
