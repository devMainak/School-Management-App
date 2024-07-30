import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'

const ClassView = () => {
  const dispatch = useDispatch()
  const { students, filter } = useSelector(state => state.students)
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <h3 className='display-3 fw-semibold pt-3 pb-2'>Class View</h3>
        <div className='input-group mb-3'>
          <label className='input-group-text' htmlFor='selectFilter'>Filter by Gender</label>
          <select className='form-select'>
            <option value="All">All</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
          </select>
          <section className='py-4'>
          <ul>
            {(filter !== "All" ? students.filter(student => student.gender === filter) : students).map(student => (
      <li className='fs-5 '>{student.name} - {student.gender} - Marks: {student.marks} - Attendance: {student.attendance}</li>
            ))}
          </ul>
            </section>
        </div>
      </main>
    </>
  )
}

export default ClassView