import logo from './logo.svg';
import './App.css';
import CompA from './ejercicio-01/compA';
import Clock from './ejercicio-02/classtofunction';
import ListComponent from './ejercicio-03/list';
import ConditionalColors from './ejercicio-04/conditionalColors';
import TaskListComponent from './ejercicio-05/task_list';
import RandomJokes from './ejercicio-07/RandomJokes';
import TodoContainer from './ejercicio-08/components/TodoContainer'
import TodoFormContainer from './ejercicio-08/components/TodoFormContainer';
import FilterOptions from './ejercicio-08/components/FilterOptions'

function App() {
  return (
    <div className="App">
        {/* Ejercicio 1 */}
        {/* <CompA></CompA> */}
        
        {/* Ejercicio 2 */}
        {/* <Clock></Clock> */}

        {/* Ejercicio 3 */}
        {/* <ListComponent></ListComponent> */}

        {/* Ejercicio 4 */}
        {/* <ConditionalColors></ConditionalColors> */}

        {/* Ejercicio 5 */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* Ejercicio 7 */}
        {/* <RandomJokes></RandomJokes> */}

        {/* Ejercicio 8 */}
        <header className='App-header'>
          <TodoContainer />
          <TodoFormContainer />
          <FilterOptions />
        </header>
    </div>
  );
}

export default App;
