import React from 'react'

export const TaskList = ({entryList, handleOnDelete, taskswitch, badList, handleOnCheck}) => {
  return (
    <div className="col">
          <h2 className="text-center">Entry List</h2>
          <hr />

          <table className="table table-striped">
            <tbody id="task-list">
                {entryList.map((item, i) =>(
                     <tr key ={i}>
                      <td>
                      <input type="checkbox" className="form-check-input" value={item._id} onChange ={handleOnCheck}/>
                      </td>
                     <th scope="row">{i + 1}</th>
                     <td>{item.task}</td>
                     <td>{item.hr}hr</td>
                     <td>

                       <button 
                       onClick ={() => handleOnDelete(item._id)} class="btn btn-danger">
                         <i class="fa-solid fa-trash"></i>
                       </button>
                       <button onClick={() => taskswitch(item._id, "bad")}
                    class="btn btn-success">
                         <i class="fa-solid fa-arrow-right-long"></i>
                       </button>
                     </td>
                   </tr>
                ) )}




            </tbody>
          </table>
        </div>
  );
}