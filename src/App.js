
import './App.css';
import { Display } from './NoToList/Display';
import { Form } from './NoToList/Form';
import { Title } from './NoToList/Title';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
      <div class="container">
        {/* <!-- top title --> */}
        <Title/>

        {/* <!-- form area --> */}
        <Form/>

        {/* <!-- list area --> */}
        <Display/>

        <div class="row">
          <div class="col">
            The total time allocated = <span id="totalHrs">0</span> hr
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
