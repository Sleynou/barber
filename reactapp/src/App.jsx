import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ClientNavbar from './components/espaceClient/ClientNavBar'
import AccueilClient from './components/espaceClient/AccueilClient'
import Footer from './components/espaceClient/Footer.jsx'
import LoginForm from './components/espaceClient/LoginForm.jsx';
import RegisterForm from './components/espaceClient/RegisterForm.jsx'
import HomeClient from './components/espaceClient/HomeClient.jsx';

function App() {

  return (
    <div className="App">
      <ClientNavbar/>
      {/* <AccueilClient/> */}
      
      {/* <LoginForm/> */}
      {/* <RegisterForm/> */}
      <HomeClient/>
      <Footer/> 
    </div>
  );
}

export default App;
