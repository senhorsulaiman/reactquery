import React, { useMemo } from 'react'
import MOCK_DATA from '../../MOCK_DATA.json'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
const StudentList = () => {

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

                            },
                            {

                                accessorKey:"email",
                                header:"email",

                                            },
                                            {

                                                accessorKey:"gender",
                                                header:"gender",

                                                            }

                        ])

   const table= useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()
    })
  return (
    <div>
      <table className="table my-5">
        {/* head */}
        <thead>
            {table.getHeaderGroups().map(headerGroup=>{
                 return (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header=>{
                        return(
                          <th key={header.id}>{
                            flexRender(header.column.columnDef.header,header.getContext())
                          }</th>)
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

                                <td>{flexRender(cell.column.columnDef.cell,cell.getContext())}</td>
                            )
                        })
                    }
                </tr>
            )
        })}

        </tbody>
    </table>
    </div>
  )
}

export default StudentList
