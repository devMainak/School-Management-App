import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTeachers } from './teachersSlice'
import Navbar from '../../components/Navbar'
import TeacherList from './TeacherList'
import { useEffect } from 'react'

const TeacherView = () => {
  const dispatch = useDispatch()
  const { teachers, status, error } = useSelector(state => state.teachers)
  
  useEffect(() => {
    dispatch(fetchTeachers())
  }, [])
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <h1 className='display-1 fw-semibold pt-4 pb-2'>Teacher View</h1>
        <Link className='btn btn-warning' to="/teacherform">Add Teacher</Link>
        <section className='mt-3'>
          {status === "loading" && <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}
          {error && <p>{error}</p>}
          {teachers.length !== 0 ? <TeacherList teachers={teachers}/> : <p>No Teacher Found!</p>}
        </section>
      </main>
    </>
  )
}

export default TeacherView