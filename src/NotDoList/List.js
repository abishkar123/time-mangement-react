import React from 'react'
import { BadList } from './BadList';
import { TaskList } from './TaskList';

export const List = () => {
  return (
    <div className="row mt-5">
        {/* <div className="col">
          <h2 className="text-center">Task List</h2>
          <hr />

          <table className="table table-striped">
            <tbody id="task-list"></tbody>
          </table>
        </div>
         */}
         <TaskList/>
        {/* <div className="col">
          <h2 className="text-center">Bad List</h2>
          <hr />

          <table className="table table-striped">
            <tbody id="bad-list"></tbody>
          </table>
          <div className="">
            You could hae saved =
            <span id="totalBadHrs">0</span> Hrs
          </div>
        </div> */}

         <BadList/>
      </div>
  );
}
