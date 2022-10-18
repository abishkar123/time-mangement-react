import React from 'react'

export const BadList = ({badList, handleOnDelete, taskswitch}) => {
  const ttlHr = badList.reduce((acc, item) => acc + item.hr, 0);
  return(
    <div className="col">
    <h2 className="text-center">Bad List</h2>
    <hr />

    <table className="table table-striped">
      <tbody id="bad-list">

 {badList.map((item, i) =>(
                     <tr key={i}>
                     <th scope="row">{i + 1}</th>
                     <td>{item.task}</td>
                     <td>{item.hr}hr</td>
                     <td>
                       <button 
                       onClick ={()=>handleOnDelete(item._id)} 
                        class="btn btn-danger">
                         <i class="fa-solid fa-trash"></i>
                       </button>
                       <button onClick= {()=>taskswitch(item._id, "entry")}
                    class="btn btn-success">
                         <i class="fa-solid fa-arrow-left-long"></i>
                       </button>
                     </td>
                   </tr>
                ) )}


      </tbody>
    </table>
    <div className="text-end fw-bold">
      You could hae saved = {ttlHr} Hrs
    </div>
  </div>
  )
}
