import logo from './logo.svg';
import './App.css';

/*class Button extends React.Component {
render() {
  return (
    <div>
    
    </div>
  )
}
}*/

function Metka() {
  return (
    <div style = {{
      textAlign: '20px',
      border: '3px solid red',
      padding: '7px',
      width: '300px'
    }}>
      Поиск      
    </div>
  )
}

function ButtonSearch() {
  return (
    <div> 
      <button style = {{
        color: '#ff00ff',
        height: '40px',
        width: '100px'
      }}> 
        Прогноз
      </button>
    </div>
  )
}

function NameApp() {
  return (
    <div style = {{
      fontSize: '50px',
      textAlign: 'center',
      left: '350px'
    }}>
      Прогноз погоды
    </div>
  )
}

function MyWeather() {
  return (
    <div style = {{
      textAlign: 'center',
      border: '3px solid black',
      padding: '1px',
      width: '600px',
      height: '600px'
    }}>
      Результат      
    </div>
  )
}

function App() {
  return (
    <div ButtonSearch style = {{left: '300px'}} >
      <NameApp/>
      <Metka/>
      <ButtonSearch/>
      <MyWeather/>
    </div>
  )
}

/*function App() {
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
      </header>
    </div>
  );
}*/

export default App;
