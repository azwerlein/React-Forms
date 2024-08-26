import './App.css';
import Country from './components/Country';
import { useState } from 'react';

function App() {
  const buildCategories = (gold, silver, bronze) => [
    {type: 'gold', count: gold},
    {type: 'silver', count: silver},
    {type: 'bronze', count: bronze},
  ];

  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', categories: buildCategories(3, 1, 2), },
    { id: 2, name: 'China', categories: buildCategories(3, 2, 1), },
    { id: 3, name: 'Germany', categories: buildCategories(0, 4, 2), },
  ]);

  const updateCountry = (country) => {
    console.log(country)
    const list = countries.map(c => {
      if ( c.id === country.id) {
        return country;
      }

      return c;
    });

    console.log(countries)

    setCountries(list);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Total medals across all countries: 
          {
            countries.reduce((a, b) => a + b.categories.reduce((c, d) => c + d.count, 0), 0)
          }
        </div>
        <div>
          {
            countries.map(c =>
              <Country
                key={c.id}
                country={c}
                callback={updateCountry}
              ></Country>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
