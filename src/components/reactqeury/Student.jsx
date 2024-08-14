
import React, { useState } from 'react'
import { useQuery} from '@tanstack/react-query'
import axios from 'axios'

function Student() {
    const [page,setPage]= useState(1);
    const totaPage=(4/4);
    const fetchDetails=async(page)=>{

        const url='https://jsonplaceholder.typicode.com/comments';
        const url2='http://localhost:3000/student';
        const response=await axios.get(`${url2}?_limit=5&_page=${page}`);
        return response.data;

    }
    const {data,error,isLoading}=useQuery({
        queryKey:['student',page],
        queryFn:()=>fetchDetails(page),
        keepPreviousData:true,
    }
    )
    if(isLoading) return(< > <div className='loading mt-5'></div></>)
    if(error) return(<>Error:{error.message}</>)

  return (


    <div className="overflow-x-auto  max-w-6xl mx-auto p-5">

    <table className="table my-5">
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

        {/* row  */}
        {data && data.map(student=>{

return (
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.body}</td>
        </tr>)
            })}
        </tbody>
    </table>
    <div className='flex justify-end'>
       <button class="btn btn-outline btn-sm  me-2" onClick={()=>setPage((currentPage)=>currentPage-1)} disabled={page===1}>Prev</button>
       <button class="btn btn-outline btn-sm" onClick={()=>setPage((currentPage)=>currentPage+1)} disabled={page===totaPage}>Next</button>
    </div>
    </div>



  )
}

export default Student