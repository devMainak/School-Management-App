import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import { setFilter, setSortBy } from '../students/studentsSlice'

const ClassView = () => {
  const dispatch = useDispatch()
  const { students, filter, sortBy } = useSelector(state => state.students)
  
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value))
  }

  const filterStudents = filter !== "All" ? students.filter(student => student.gender === filter) : students

  const sortedStudents = sortBy === "name"
  ? [...filterStudents].sort((a, b) => a.name.localeCompare(b.name))
  : [...filterStudents].sort((a, b) => b[sortBy] - a[sortBy])
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <h3 className='display-3 fw-semibold pt-3 pb-2'>Class View</h3>
        <div className='input-group mb-4'>
          <label className='input-group-text' htmlFor='selectFilter'>Filter by Gender</label>
          <select onChange={handleFilterChange} id='selectFilter' className='form-select'>
            <option value="All">All</option>
            <option value="Male">Boys</option>
            <option value="Female">Girls</option>
          </select>
        </div>
        <div className='input-group'>
          <label className='input-group-text' htmlFor='sortByArg'>Sort by:</label>
          <select onChange={handleSortChange} id='sortByArg' className='form-select'>
            <option value="name">Name</option>
            <option value="marks">Marks</option>
            <option value="attendance">Attendance</option>
          </select>
        </div>
        <section className='py-4'>
          <ul>
            {sortedStudents.map(student => (
        <li className='fs-5' key={student._id}>{student.name} - {student.gender} - Marks: {student.marks} - Attendance: {student.attendance}</li>
            ))}
          </ul>
            </section>
      </main>
    </>
  )
}

export default ClassView