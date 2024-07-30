import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Navbar from "../../components/Navbar"
import { deleteStudentAsync } from './studentsSlice'
import { useState } from 'react'

const StudentDetail = () => {
  const [alert, setAlert] = useState('')
  const dispatch = useDispatch()
  
  const { students } = useSelector((state) => state.students)
  const { studentId } = useParams()

  const studentData = students.find(student => student._id === studentId )

  const handleDelete = async () => {
    try {
      const resultAction = await dispatch(deleteStudentAsync(studentData._id))
      if (deleteStudentAsync.fulfilled.match(resultAction))
      {
        setAlert("Student deleted successfully.")
      } else {
        setAlert("Error occured while deleting the student!")
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (!studentData) {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main className='container'>
          <h3 className='display-3 fw-semibold pt-3 pb-2'>Student Detail</h3>
          <section className='fs-5'>
            <p>Student has been deleted.</p>
          </section>
        </main>
      </>
    )
  }
  
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
        <Link className='btn btn-danger mx-2' onClick={handleDelete}>Delete</Link>
        {alert && <p className='fs-5 fw-normal pt-2'>{alert}</p>}
      </main>
    </>
  )
}

export default StudentDetail