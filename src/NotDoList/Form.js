import React, { useState} from 'react'
import { reandomStr } from '../utils/randomGenerator';


export const Form = ({taskEntry}) => {
    const [data, setData] = useState({})

    const handleOnChange = (e) =>{
        const { value, name} = e.target
        setData({
            ...data,
           [name]: name === 'hr'? +value :value,
           type: "entry",
        })
    };
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        taskEntry({...data, _id: reandomStr });
      
    };

    
  return (
    <form  onSubmit={handleOnSubmit}>
        <div className="row g-2 mt-3">
          <div className="col-md-6">
            <input
              name="task"
              type="text"
              className="form-control"
              placeholder="Enter task title"
              required
              onChange={handleOnChange}
              
            />
          </div>
          <div className="col-md-3">
            <input
              name="hr"
              type="number"
              className="form-control"
              placeholder="Enter hours"
              required
              onChange={handleOnChange}
              
              min="1"
            />
          </div>
          <div className="col-md-3">
            <div className="d-grid gap-2">
              <button type='submit'  className="btn btn-primary">
                <i className="fa-solid fa-pen-to-square"></i> Add New Task
              </button>
            </div>
          </div>
        </div>
      </form>
  );
}
