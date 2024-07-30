import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Navbar from "../../components/Navbar"

const StudentDetail = () => {

  const { students } = useSelector((state) => state.students)
  const { studentId } = useParams()

  const studentData = students.find(student => student._id === studentId )

  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <h3 className='display-3 fw-semibold pt-3 pb-2'>Student Detail</h3>
        <section className='fs-5'>
          <p>Name: {studentData.name}</p>
          <p>Age: {studentData.age}</p>
          <p>Grade: {studentData.grade}</p>
          <p>Attendance: {studentData.attendance}</p>
          <p>Marks: {studentData.marks}</p>
        </section>
        <Link className='btn btn-warning' to="/studentform" state={{studentData}}>Edit Details</Link>
        <Link className='btn btn-danger mx-2'>Delete</Link>
      </main>
    </>
  )
}

export default StudentDetail