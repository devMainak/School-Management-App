import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudentAsync } from './studentsSlice'
import Navbar from '../../components/Navbar'

const StudentForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [grade, setGrade] = useState()
  const [gender, setGender] = useState()

  const handleGenderBtn = (e) => {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newStudent = { name, age: parseFloat(age), grade, gender }
    dispatch(addStudentAsync(newStudent))
  }
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <h1 className='display-1 fw-normal pt-4 pb-2'>Add Student</h1>
        <form onSubmit={handleSubmit}>
          <input className='form-control' onChange={(e) => setName(e.target.value)} placeholder='Name' type='text'/>
          <br/>
          <input className='form-control' onChange={(e) => setAge(e.target.value)} placeholder='Age' type='number'/>
          <br/>
          <input className='form-control' onChange={(e) => setGrade(e.target.value)} placeholder='Grade' type='text'/>
          <br/>
          <label>Gender: </label>
          <label className='px-2'><input type='radio' name='gender' value="Male" onClick={handleGenderBtn}/> Male</label>
          <label><input type='radio' name='gender' value="Female" onClick={handleGenderBtn}/> Female</label>
          <br/><br/>
          <button className='btn btn-primary' type='submit'>Add</button>
        </form>
      </main>
    </>
  )
}

export default StudentForm