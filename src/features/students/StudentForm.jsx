import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addStudentAsync, updateStudentAsync } from "./studentsSlice";
import Navbar from "../../components/Navbar";

const StudentForm = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { studentData } = location.state || {};

  const [name, setName] = useState(studentData ? studentData.name : "");
  const [age, setAge] = useState(studentData ? studentData.age : "");
  const [grade, setGrade] = useState(studentData ? studentData.grade : "");
  const [gender, setGender] = useState(studentData ? studentData.gender : "");
  const [attendance, setAttendance] = useState();
  const [marks, setMarks] = useState();

  const [alert, setAlert] = useState();

  const handleGenderBtn = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!studentData) {
        if (name && age && grade && gender) {
          const newStudent = { name, age: parseFloat(age), grade, gender };
        const resultAction = await  dispatch(addStudentAsync(newStudent))
          if (addStudentAsync.fulfilled.match(resultAction))
          {
            // This block runs if the addStudentAsync thunk was fulfilled successfully
          setAlert("Student added successfully.")
          } else {
             // Handle the rejected case if needed
            setAlert("Error occured while adding student!")
          }
        } else {
          setAlert("Fill out all the details!");
        }
      } else {
        if (name && age && grade && gender && attendance && marks) {
          const updatedData = {name, age: parseFloat(age), grade, gender, attendance: parseFloat(attendance), marks: parseFloat(marks)}
          const resultAction = await dispatch(
            updateStudentAsync({ studentId: studentData._id, updatedData }))
          if (updateStudentAsync.fulfilled.match(resultAction)) {
            // This block runs if the updateStudentAsync thunk was fulfilled successfully
            setAlert("Student data updated successfully.")
          } else {
            // Handle the rejected case if needed
           setAlert("Some error occurred while updating student data!")
          }
        } else {
          setAlert("Fill out all the details!");
        }
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <h1 className="display-1 fw-normal pt-4 pb-2">Add Student</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <br />
          <input
            className="form-control"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            type="number"
            value={age}
          />
          <br />
          <input
            className="form-control"
            onChange={(e) => setGrade(e.target.value)}
            placeholder="Grade"
            type="text"
            value={grade}
          />
          <br />
          <label>Gender: </label>
          <label className="px-2">
            <input
              type="radio"
              name="gender"
              value="Male"
              onClick={handleGenderBtn}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onClick={handleGenderBtn}
            />{" "}
            Female
          </label>
          <br />
          <br />
          {studentData && (
            <div>
              <input
                className="form-control"
                type="number"
                placeholder="Attendance"
                onChange={(e) => setAttendance(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="number"
                placeholder="Marks"
                onChange={(e) => setMarks(e.target.value)}
              />
            </div>
          )}
          <br />
          <button className="btn btn-primary" type="submit">
            {!studentData ? "Add" : "Update"}
          </button>
        </form>
        {alert && <p className="pt-3 fs-4 text-danger">{alert}</p>}
      </main>
    </>
  );
};

export default StudentForm;
