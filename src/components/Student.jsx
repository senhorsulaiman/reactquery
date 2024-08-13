import React from 'react'
import { useQuery} from '@tanstack/react-query'
import axios from 'axios'

function Student() {
    const fetchDetails=async()=>{
        const response=await axios('http://localhost:3000/student');
        return response.data;

    }
    const {data,error,isLoading}=useQuery({
        queryKey:['student'],
        queryFn:fetchDetails
    }
    )
    if(isLoading) return(< > <span className='loading'></span></>)
    if(error) return(<>Error:{error.message}</>)
  return (


    <div className="overflow-x-auto  max-w-6xl mx-auto">
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Email</th>
            <th>body</th>
        </tr>
        </thead>
        <tbody>

        {/* row 1 */}
        {data && data.map(student=>{

return (
        <tr key={student.id}>
            <th>{student.id}</th>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.body}</td>
        </tr>)
            })}
        </tbody>
    </table>
    </div>



  )
}

export default Student