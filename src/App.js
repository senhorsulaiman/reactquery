
import './App.css';
import AddnewStudent from './components/reactqeury/AddnewStudent';

import Student from './components/reactqeury/Student';
import ReactTable from './ReactTable';

function App() {
  return (
    <div className="App">
      <div className=''>
        <h2 className='my-5 font-bold '>React Query</h2>
        <AddnewStudent/>
        <Student/>
        <h2 className='my-5 font-bold'>React Table</h2>
        <ReactTable/>

        </div>


    </div>
  );
}

export default App;
