import './App.css';
import Country from './components/Country';
import { useState } from 'react';

function App() {
  const [countries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'Germany', gold: 0 },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {
          countries.map(c => 
            <Country
              key={c.id}
              name={c.name}
              count={c.gold}
            ></Country>
          )
        }
        </div>
      </header>
    </div>
  );
}

export default App;
