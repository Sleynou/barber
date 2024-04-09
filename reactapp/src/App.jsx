import './App.css';

function App() {

  const test = ()=>{
      fetch('/RDVclient?iDClient=2')
        .then( response => {
          console.log(response);
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
