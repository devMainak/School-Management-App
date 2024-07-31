import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTopStudent, updateSchoolStats } from './schoolSlice'
import Navbar from "../../components/Navbar"

const SchoolView = () => {
  const dispatch = useDispatch()
  const { students } = useSelector(state => state.students)
  const { totalStudents, averageAttendance, averageMarks, topStudent } = useSelector(state => state.school)
  
  useEffect(() => {
    const totalStudents = students.length
    const averageAttendance = students.reduce((acc, curr) => acc += curr.attendance, 0) / totalStudents
    const averageMarks = students.reduce((acc, curr) => acc += curr.marks, 0) / totalStudents
    const topStudent = students.reduce((acc, curr) => {
      if (curr.marks > acc.marks){
        acc = curr
      }
      return acc
    }, students[0])

    dispatch(updateSchoolStats({totalStudents, averageAttendance, averageMarks}))
    dispatch(setTopStudent(topStudent))
  }, [])
  

  
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <h3 className="display-3 fw-semibold pt-4 ">School View</h3>
        <p className="fs-5 fw-normal">Total Students: {totalStudents}</p>
        <p className="fs-5 fw-normal">Average Attendance: {averageAttendance.toFixed(2)}</p>
        <p className="fs-5 fw-normal">Average Marks: {averageMarks.toFixed(2)}</p>
        {topStudent && <p className="fs-5 fw-normal">Top Student: {topStudent.name}</p>}
      </main>
    </>
  )
}

export default SchoolView