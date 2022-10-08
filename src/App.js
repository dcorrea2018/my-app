import logo from './logo.svg';
import './App.css';
import { Octocat } from './Octocat';
import { Text } from './Text';
import { CustomButtom } from './Components/CustomButtom';
import { CustomButtom2 } from './Components/CustomButtom2';

const alumnos = [
  {
    nombre: "Diego",
    calificacion: 7.5
  },
  {
    nombre: "Juango",
    calificacion: 8.5
  },
  {
    nombre: "Pedro]",
    calificacion: 9.5
  },
  {
    nombre: "Maria",
    calificacion: 10
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          alumnos.map((alumno, index) => {
            return (<p key={index}>{alumno.nombre} - {alumno.calificacion}</p>)
          })
        }
        <Octocat />
        <Text />
        <CustomButtom />
        <CustomButtom2 />


      </header>
    </div>
  );
}

export default App;
