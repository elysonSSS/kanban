import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title={'Pendente'} />
        <TaskList title="Fazendo"/>
        <TaskList title="Completo"/>
      </div>
    </div>
  );
}
