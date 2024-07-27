import { Link } from "react-router-dom"

const StudentList = ({students}) => {
  return (
    <div>
      <h3>Student List</h3>
      <ul>
        { students.map(student => (
          <li><Link>{student.name} (Age: {student.age})</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList