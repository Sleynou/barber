import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ClientNavbar from './components/espaceClient/ClientNavBar'
import AccueilClient from './components/espaceClient/AccueilClient'

function App() {

  return (
    <div className="App">
      <ClientNavbar/>
      <AccueilClient/>
    </div>
  );
}

export default App;
