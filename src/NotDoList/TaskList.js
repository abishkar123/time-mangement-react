import React from 'react'

export const TaskList = () => {
  return (
    <div className="col">
          <h2 className="text-center">Task List</h2>
          <hr />

          <table className="table table-striped">
            <tbody id="task-list"></tbody>
          </table>
        </div>
  );
}
