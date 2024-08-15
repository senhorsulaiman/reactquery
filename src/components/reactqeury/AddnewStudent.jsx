
import { QueryClient, useMutation,useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, { useState } from 'react'
// import { useMutation } from '@tanstack/react-query'
function AddnewStudent() {
    const queryClient=new QueryClient()
    const [newStudent,setNewStudent]=useState({postId: '',name:'',email:'',body:''});

// const studentdetails=newStudent;
    const postStudentData=async(studentdetails)=>{
        const url='http://localhost:3000/student';
         await axios.post(url,studentdetails)
    }
    const addStudent=useMutation({

        mutationFnFn:postStudentData,
        onSuccess:()=>{queryClient.invalidateQueries(['student'])}
    });
    // const posStudenttData
    const handlepostData=()=>{
        addStudent.mutate(newStudent);
        setNewStudent({name:'',email:'',body:''})
    }
    return (
        <>

<div className='overflow-x-auto  max-w-6xl   mx-auto grid grid-cols-2 gap-3 gap-y-5 bg-base-300 p-5 rounded-md'>


<input type="text" placeholder="name" className="input input-bordered w-full " value={newStudent.name}

onChange={(e)=>{setNewStudent({...newStudent,name:e.target.value})}}
/>
<input type="email" placeholder="email" className="input input-bordered w-full" value={newStudent.email}

onChange={(e)=>{setNewStudent({...newStudent,email:e.target.value})}}
/>
<input type="text" placeholder="body" className="input input-bordered w-full " value={newStudent.body}

onChange={(e)=>{setNewStudent({...newStudent,body:e.target.value})}}
/>
<button className="btn" onClick={handlepostData} type='submit'>Add</button>


</div>
        </>

  )
}

export default AddnewStudent
