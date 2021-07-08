import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { EmptyState } from "../EmptyState";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <EmptyState />;
  }
  return (
    <div>
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            <h1>{student.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
