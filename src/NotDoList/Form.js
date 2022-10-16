import React from 'react'

export const Form = () => {
  return (
    <form action="javascript:void(0)" onsubmit="handleOnSubmit(this)">
        <div className="row g-2 mt-3">
          <div className="col-md-6">
            <input
              name="task"
              type="text"
              className="form-control"
              placeholder="Enter task title"
              required
            />
          </div>
          <div className="col-md-3">
            <input
              name="hr"
              type="number"
              className="form-control"
              placeholder="Enter hours"
              required
              min="1"
            />
          </div>
          <div className="col-md-3">
            <div className="d-grid gap-2">
              <button className="btn btn-primary">
                <i className="fa-solid fa-pen-to-square"></i> Add New Task
              </button>
            </div>
          </div>
        </div>
      </form>
  );
}
