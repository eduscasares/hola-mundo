import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
// import GreetingF from './components/pure/GreetingF';
// import TaskListComponent from './components/containers/Task_list';
// import ContactList from './components/containers/Contact_List';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Edu" /> */}
        {/* <GreetingF name="Edu" /> */}

        {/* Componente de estado de las tareas */}
        
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactList></ContactList> */}

        {/* EJEMPLOS DE DE USO DE HOOKS */}

        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        <Ejemplo4 nombre={ 'Edguard' }>
          {/* Todo lo que hay aquí dentro se tratará como un prop.children */}
          Contenido del props.children
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
