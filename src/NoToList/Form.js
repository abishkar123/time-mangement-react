import React from 'react'

export const Form = () => {
  return (
    <form action="javascript:void(0)" onsubmit="handleOnSubmit(this)">
          <div class="row g-2 mt-3">
            <div class="col-md-6">
              <input
                name="task"
                type="text"
                class="form-control"
                placeholder="Enter task title"
                required/>
            </div>
            <div class="col-md-3">
              <input
                name="hr"
                type="number"
                class="form-control"
                placeholder="Enter hours"
                required
                min="1"
              />
            </div>
            <div class="col-md-3">
              <div class="d-grid gap-2">
                <button class="btn btn-primary">
                  <i class="fa-solid fa-pen-to-square"></i> Add New Task
                </button>
              </div>
            </div>
          </div>
        </form>
  )
}
