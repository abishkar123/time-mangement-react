
import './App.css';
import { Form } from './NotDoList/Form';
import { List } from './NotDoList/List';
// import {Form} from './NotDoLit/From';



 


function App() {
  return (
    <div className="wrapper">
    <div className="container">
      {/* <!-- top title --> */}
      <div className="row">
        <div className="col text-center mt-5">
          <h1>Not To Do List!</h1>
          <hr />
        </div>
      </div>

      {/* <!-- form area --> */}
      {/* <form action="javascript:void(0)" onsubmit="handleOnSubmit(this)">
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
      </form> */}

      <Form/>


      {/* <!-- list area --> */}
      {/* <div className="row mt-5">
        <div className="col">
          <h2 className="text-center">Task List</h2>
          <hr />

          <table className="table table-striped">
            <tbody id="task-list"></tbody>
          </table>
        </div>
        <div className="col">
          <h2 className="text-center">Bad List</h2>
          <hr />

          <table className="table table-striped">
            <tbody id="bad-list"></tbody>
          </table>
          <div className="">
            You could hae saved =
            <span id="totalBadHrs">0</span> Hrs
          </div>
        </div>
      </div> */}
      <List/>

      <div className="row">
        <div className="col">
          The total time allocated = <span id="totalHrs">0</span> hr
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
