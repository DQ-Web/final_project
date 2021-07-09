const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{student.campus ? student.campus.name : 'Campus: N/A'}</h3>
    </div>
  );
};

export default StudentView;
