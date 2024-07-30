import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import { setFilter } from '../students/studentsSlice'

const ClassView = () => {
  const dispatch = useDispatch()
  const { students, filter } = useSelector(state => state.students)

  const filterByGender = (e) => {
    dispatch(setFilter(e.target.value))
  }
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <h3 className='display-3 fw-semibold pt-3 pb-2'>Class View</h3>
        <div className='input-group mb-3'>
          <label className='input-group-text' htmlFor='selectFilter'>Filter by Gender</label>
          <select onChange={filterByGender} id='selectFilter' className='form-select'>
            <option value="All">All</option>
            <option value="Male">Boys</option>
            <option value="Female">Girls</option>
          </select>
        </div>
        <section className='py-4'>
          <ul>
            {(filter !== "All" ? students.filter(student => student.gender === filter) : students).map(student => (
        <li className='fs-5'>{student.name} - {student.gender} - Marks: {student.marks} - Attendance: {student.attendance}</li>
            ))}
          </ul>
            </section>
      </main>
    </>
  )
}

export default ClassView