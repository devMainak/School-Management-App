import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const TeacherView = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <h3 className='display-3 fw-semibold pt-4 pb-2'>Teacher View</h3>
        <Link className='btn btn-warning'>Add Teacher</Link>
        <section>
        
        </section>
      </main>
    </>
  )
}

export default TeacherView