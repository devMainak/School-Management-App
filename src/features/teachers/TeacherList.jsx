import { Link } from 'react-router-dom'

const TeacherList = ({teachers}) => {
  return (
    <>
      <main>
        <h3 className='display-3 fw-semibold'>Teacher List</h3>
        <section className='mt-3'>
          <ul>
            {teachers.map(teacher => (
      <li className='fs-4' key={teacher._id}><Link to={`/teacherdetail/${teacher._id}`} state={teachers}>{teacher.name} - {teacher.subject}</Link></li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default TeacherList