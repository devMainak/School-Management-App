import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { fetchStudents } from './studentsSlice'
import Navbar from "../../components/Navbar"
import StudentList from './StudentList'


const StudentView = () => {
  const dispatch = useDispatch()
  const { students, status, error } = useSelector((state) => state.students)
  
  useEffect(() => {
    dispatch(fetchStudents())
  }, [])

  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <h1 className="display-1 fw-semibold pt-4 pb-2">Student View</h1>
        <Link className="btn btn-warning"  to="/studentform">Add student</Link>
        <section>
          {status === "loading" && <div className="spinner-border text-primary mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}
          { error && <p>{error}</p>}
          {students.length != 0 && <StudentList students={students}/> }
        </section>
      </main>
    </>
  )
}

export default StudentView