import './Styles/App.css';
import data from './data';
import Header from './Components/Header';
import Card from './Components/Card';

const cards = data.map(locations => {
  return(
    <Card 
      locations = {locations}
    />
  );
})

function App() {
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
