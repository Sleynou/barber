import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';

import ClientNavbar from './components/espaceClient/ClientNavBar.jsx'
import AccueilClient from './components/espaceClient/AccueilClient'
import Footer from './components/espaceClient/Footer.jsx'
import LoginForm from './components/espaceClient/LoginForm.jsx';
import RegisterForm from './components/espaceClient/RegisterForm.jsx'
import HomeClient from './components/espaceClient/HomeClient.jsx';
import DetailsSalon from './components/espaceClient/DetailsSalonCoiffure.jsx'
import ProfilClient from './components/espaceClient/ProfilClient.jsx';
import FavorisClient from './components/espaceClient/FavorisClient.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ClientNavbar/>

        {/* <AccueilClient/> */}
        {/* <LoginForm/> */}
        {/* <RegisterForm/> */}
        {/* <HomeClient/> */}
        {/* <DetailsSalon/> */}
        <ProfilClient/>
        {/* <FavorisClient/> */}

        <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
