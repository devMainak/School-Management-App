import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"

const StudentView = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <h1 className="display-1 fw-normal pt-4">Student View</h1>
        <button className="btn btn-warning"><Link  to="#">Add student</Link></button>
      </main>
    </>
  )
}

export default StudentView