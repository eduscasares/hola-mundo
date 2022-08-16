import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
// import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/containers/Task_list';
import ContactList from './components/containers/Contact_List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Edu" /> */}
        {/* <GreetingF name="Edu" /> */}

        {/* Componente de estado de las tareas */}
        <TaskListComponent></TaskListComponent>
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
