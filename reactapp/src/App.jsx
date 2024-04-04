import './App.css';

function App() {

  const test = ()=>{
<<<<<<< HEAD
      fetch('/RDVclient?iDClient=2')
        .then( response => {
          console.log(response);
=======
      fetch('http://localhost:3000/RDVclient?iDClient=2')
        .then( response => {
>>>>>>> a10b42149030a22a7303bfe2d57e8c940ae6f48e
          if(!response.ok) {
            throw new Error("Une erreur s est produite lors de la recuperation des données")
          }
          return response.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Erreur: ", error);
        })
}

  return (
    <div className="App">
      <h1>Test</h1>
      <button onClick={test}> Testing</button>
    </div>
  );
}

export default App;
