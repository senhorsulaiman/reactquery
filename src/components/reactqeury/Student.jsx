
import React, { useState } from 'react'
import { useQuery} from '@tanstack/react-query'
import axios from 'axios'
import StudentCard from './StudentCard';




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
                <StudentCard key={student.id} name={student.name} imageSrc={student.imgUrl} profession={student.body}/>
            )
        })}
        </div>


    <div className='flex justify-center'>
       <button className="btn btn-outline btn-sm  me-2" onClick={()=>setPage((currentPage)=>currentPage-1)} disabled={page===1}>Prev</button>
       <button className="btn btn-outline btn-sm" onClick={()=>setPage((currentPage)=>currentPage+1)} disabled={page===totaPage}>Next</button>
    </div>
    </div>



  )
}

export default Student