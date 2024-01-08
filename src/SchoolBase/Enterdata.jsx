import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RemoveAStudentAPI, getALLStudentAPI } from '../Services/allAPI.jsx'



const Enterdata = () => {
  const [deletes , setdeletes]=useState(false)

  const [allstudent,setallstudent]=useState([])
  const [allStudents, setAllStudents] = useState([]);


   useEffect(()=>{
   getalluploadeddetails()
   setdeletes(false)
   },[allStudents])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getALLStudentAPI();
        setallstudent(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  getalluploadeddetails()
    fetchData();
    setdeletes(false);
  }, [deletes]);

  const getalluploadeddetails=async()=>{
const result = await getALLStudentAPI()
console.log(result.data);
  setallstudent(result.data)
  }

  // const removeStudent = async(id) => {
  //   console.log(id);
  
  //   // Call API to remove the student
  //  await RemoveAStudentAPI(id);
   
  //   // Update the state to reflect the changes
  //   setAllStudents(allStudents.filter(student=>student.id!== id));
   
  // };
  

  const removeStudent = async (id) => {
    try {
      // Call API to remove the student
      await RemoveAStudentAPI(id);
  
      // Update the state to reflect the changes
      setAllStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));

      // Force a re-render by updating the key
      setKey((prevKey) => prevKey + 1);
    } catch (error) {
     
    }
  };
 

  return (
    <div>
      <center className='py-2'><h1>Students Database</h1></center>
      <center><Link to={"/view"}><button className='btn btn-primary mb-3'>New Admission <i class="fa-solid fa-graduation-cap ps-3"></i></button></Link></center>
      <table class="table container ">
  <thead >
    <tr>
      <th scope="col">ID:</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Phone No:</th>
      <th scope="col">Adress</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {allstudent && allstudent.length >0? (
    allstudent.map((student) => (
      <tr key={student.id}>
        <th scope="row">{student.id}</th>
        <td>{student.name}</td>
        <td>{student.classs}</td>
        <td>{student.number}</td>
        <td>{student.address}</td>
        <td>
        <td>
  <i onClick={() =>removeStudent(student.id)} style={{ color: "red" }} className="fa-solid fa-trash ps-3"></i>
</td>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td className='text-center' colSpan="7">No students</td>
    </tr>
  )}
</tbody>
</table>

    </div>
  )
}

export default Enterdata

