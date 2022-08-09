import { AddTask } from './AddTasks/AddTasks';
import './App.css';
import { EditTasks } from './EditTasks/EditTasks';
import ListTasks from './ListTasks/ListTasks';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <ListTasks />
      <EditTasks/>
      
    </div>
  );
}

export default App;
