import React from 'react'

export const Table = () => {
  return (
    <>
       <div className='container'>
          <h4 className='ms-4' data-bs-toggle="modal" data-bs-target="#exampleModal"
          style={{cursor: "pointer"}}>
              <i className="fa-solid fa-plus text-success py-4" />
                  Add professeur
          </h4>
          <table className="table">
             <thead>
                <tr>
                <th scope="col">name</th>
                <th scope="col">ingredient</th>
                <th scope="col">steps</th>
                <th scope="col">time</th>
                <th scope="col">photo</th>
                <th scope="col">Action</th>
               </tr>
             </thead>
             <tbody>
              
                <tr key=''>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td>
                       <button
                          className="btn btn-primary ms-2"
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                           
                          >
                            Delete
                        </button>
                    </td>
                </tr>   
  
             </tbody>
          </table>
       </div>
    </>
 )
}