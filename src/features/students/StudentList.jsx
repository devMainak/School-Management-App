import { Link } from "react-router-dom"

const StudentList = ({students}) => {
  return (
    <div>
      <h3 className="display-3 fw-semibold pt-4 pb-2">Student List</h3>
      <ul>
        { students.map(student => (
          <li key={student._id}><Link className="fs-5" to={`/studentDetail/${student._id}`}>{student.name} (Age: {student.age})</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList