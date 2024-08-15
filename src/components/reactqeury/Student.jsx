
import React, { useState } from 'react'
import { useQuery} from '@tanstack/react-query'
import axios from 'axios'
import TeamCard from './TeamCard';




function Student() {
    const [page,setPage]= useState(1);
    const totaPage=2;
    const fetchDetails=async(page)=>{

        const url='https://jsonplaceholder.typicode.com/comments';
        const url2='http://localhost:3000/student';
        const response=await axios.get(`${url2}?_limit=4&_page=${page}`);
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

<div className="-mx-4 flex flex-wrap justify-center">
{data && data.map(student=>{
    return(
                <TeamCard key={student.id} name={student.name} imageSrc='https://images.unsplash.com/photo-1542385262-cdf06b302c2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' profession={student.body}/>
            )
        })}
        </div>

    {/* <table className="table my-5">

        <thead>
        <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Email</th>
            <th>body</th>
        </tr>
        </thead>
        <tbody>


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
    </table> */}
    <div className='flex justify-end'>
       <button className="btn btn-outline btn-sm  me-2" onClick={()=>setPage((currentPage)=>currentPage-1)} disabled={page===1}>Prev</button>
       <button className="btn btn-outline btn-sm" onClick={()=>setPage((currentPage)=>currentPage+1)} disabled={page===totaPage}>Next</button>
    </div>
    </div>



  )
}

export default Student