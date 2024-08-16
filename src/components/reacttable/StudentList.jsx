import React, { useMemo, useState } from 'react'
import MOCK_DATA from '../../MOCK_DATA.json'
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable,getSortedRowModel } from '@tanstack/react-table';
const StudentList = () => {
    const  [ pagination,setPagination ]=useState({
        pageIndex:0,
        pageSize:10,
    });
    const [sorting, setSorting] = useState([]);
    // {"id":1,"first_name":"Elise","last_name":"Haselhurst","email":"ehaselhurst0@nhs.uk","gender":"Female"}

    const data=useMemo(()=>MOCK_DATA,[]);
    const columns=useMemo(()=>[{

accessorKey:"id",
header:"ID",

    },{

accessorKey:"first_name",
header:"first name",

            },{

                accessorKey:"last_name",
                header:"last name",
                enableSorting:false,

                            },
                            {

                                accessorKey:"email",
                                header:"email",
                                enableSorting:false,

                                            },
                                            {

                                                accessorKey:"gender",
                                                header:"gender",
                                                enableSorting:false,

                                                            }

                        ])

   const table= useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
         getSortedRowModel: getSortedRowModel(), //not needed for manual sorting
        getPaginationRowModel:getPaginationRowModel(),

        state:{pagination,sorting},
        onPaginationChange:setPagination,
        pageCount:Math.ceil(data.length / pagination.pageSize),
        onSortingChange:setSorting

    })
  return (
    <div className='overflow-x-auto  max-w-6xl mx-auto p-5'>
      <table className="table my-5">
        {/* head */}
        <thead>
            {table.getHeaderGroups().map(headerGroup=>{
                 return (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header=>{
                        return(
                          <th key={header.id} className='capitalize cursor-pointer ' onClick={header.column.getToggleSortingHandler()}><span className='flex flex-nowrap'>{
                            flexRender(header.column.columnDef.header,header.getContext())

                          }
                          {{


    asc:<AiOutlineSortAscending />,
    desc:<AiOutlineSortDescending/>,

                          } [header.column.getIsSorted()]??null}</span>
                    </th>)
                    })}

            </tr>)
            })}

        </thead>
        <tbody>

        {

        table.getRowModel().rows.map(row=>{
            return(
                <tr key={row.id}>

                    {
                        row.getVisibleCells().map(cell=>{
                            return(

                                <td key={cell.id}>{flexRender(cell.column.columnDef.cell,cell.getContext())}</td>
                            )
                        })
                    }
                </tr>
            )
        })}

        </tbody>
    </table>
   <div className="flex justify-between">
    <div>  <span>page {table.getState().pagination.pageIndex+1} of {table.getPageCount()}</span>  <select className='input input-bordered input-sm ms-4'
  value={table.getState().pagination.pageSize}
  onChange={e => {
    table.setPageSize(Number(e.target.value))
  }}
>
  {[5, 10,15].map(pageSize => (
    <option key={pageSize} value={pageSize}>
      {pageSize}
    </option>
  ))}
</select> </div>

    <div className='join'>
    <button className="join-item btn btn-sm btn-outline" onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</button>
    {/* <button className="join-item btn btn-sm btn-outline"  onClick={() => table.firstPage()}>1</button> */}

    <button className="join-item btn btn-sm btn-outline" onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>Next</button>
    </div>

    </div>

    </div>

  )
}

export default StudentList
