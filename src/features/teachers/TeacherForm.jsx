import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTeacherAsync } from './teachersSlice'
import Navbar from "../../components/Navbar"

const TeacherForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [gender, setGender] = useState('')
  const [subject, setSubject] = useState('')
  const [alert, setAlert] = useState('')

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      if (name && age && gender && subject)
      {
    const teacher = {name, age, gender, subject}
        const resultAction = await dispatch(addTeacherAsync(teacher))
        if (addTeacherAsync.fulfilled.match(resultAction))
        {
          setAlert("Teacher added successfully.")
        } else {
          setAlert("Some error occurred while adding teacher")
        }
      } else {
        setAlert("Fill out all the details!")
      }

      } catch (error) {
      console.error(error)
      }
  }
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <h3 className="display-3 fw-semibold pt-4 pb-2">Add Teacher</h3>
        <form onSubmit={handleFormSubmit}>
        <input onChange={(e) => setName(e.target.value)} className="form-control mb-3" placeholder="Name" type="text"/>
         <input onChange={(e) => setAge(e.target.value)} className="form-control mb-3" placeholder="Age" type="number"/>
        <div className="mb-3">
          <label>Gender: </label>
          <label onClick={handleGender} className="mx-2"><input type="radio" value="Male" name="selectGender"/> Male</label>
           <label><input onClick={handleGender} type="radio" value="Female" name="selectGender"/> Female</label>
        </div>
        <label>Subject: </label>
        <select onChange={(e) => setSubject(e.target.value)} className="form-select mb-3">
          <option value="English">English</option>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
           <option value="Computer Science">Computer Science</option>
        </select>
          <button type="submit" className="btn btn-primary">Add</button>
          </form>
        {alert && <p className="mt-3 fs-5 fw-normal text-success">{alert}</p>}
      </main>
    </>
  )
}

export default TeacherForm