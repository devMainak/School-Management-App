import { useLocation, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteTeacherAsync } from './teachersSlice'

const TeacherList = () => {
  const [alert, setAlert] = useState('')
  const location = useLocation()
  const teachers = location.state
  const { teacherId } = useParams()
  const dispatch = useDispatch()

  const teacherData = teachers.find(teacher => teacher._id === teacherId)

  const handleDeleteButton = async () => {
    try {
      const resultAction = await dispatch(deleteTeacherAsync(teacherData._id))
      if (deleteTeacherAsync.fulfilled.match(resultAction))
      {
        setAlert("Teacher deleted successfully.")
      } else {
        setAlert("Error occured while deleting teacher.")
      }
    } catch(error) {
      console.error(error)
    }
  }
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <h3 className='display-3 fw-semibold mt-4'>Teacher Detail</h3>
        <section className='mt-3'>
          <p className='fs-4 fw-normal'>Name: {teacherData.name}</p>
          <p className='fs-4 fw-normal'>Age: {teacherData.age}</p>
          <p className='fs-4 fw-normal'>Gender: {teacherData.gender}</p>
          <p className='fs-4 fw-normal'>Subject: {teacherData.subject}</p>
        </section>
        <button onClick={handleDeleteButton} className='btn btn-danger mt-3'>Delete</button>
        {alert && <p className='fs-4 text-primary mt-3'>{alert}</p>}
      </main>
    </>
  )
}

export default TeacherList