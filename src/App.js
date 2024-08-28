import './App.css';
import Country from './components/Country';
import { useState } from 'react';
import NewCountry from './components/NewCountry';

function App() {
  const buildCategories = (gold, silver, bronze) => [
    { type: 'Gold', count: gold },
    { type: 'Silver', count: silver },
    { type: 'Bronze', count: bronze },
  ];

  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', categories: buildCategories(3, 1, 2), },
    { id: 2, name: 'China', categories: buildCategories(3, 2, 1), },
    { id: 3, name: 'Germany', categories: buildCategories(0, 4, 2), },
  ]);

  const updateCountry = (country) => {
    console.log(country)
    const list = countries.map(c => {
      if (c.id === country.id) {
        return country;
      }

      return c;
    });
    setCountries(list);
  }

  const addCountry = (countryName) => {
    const list = [...countries];
    list.push(
      { id: countries.length + 1, name: countryName, categories: buildCategories(0, 0, 0), }
    )
    setCountries(list);
  }

  const deleteCountry = (id) => {
    const list = countries.filter(c => c.id !== id);
    setCountries(list);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Total medals across all countries:
          {
            countries.reduce((a, b) => {
              return a + b.categories.reduce((c, d) => {
                return c + d.count
              }, 0)
            }, 0)
          }
        </div>
        <div className='list'>
          {
            countries.map(c =>
              <Country
                key={c.id}
                country={c}
                updateCallback={updateCountry}
                deleteCallback={deleteCountry}
              ></Country>
            )
          }
        </div>
        <NewCountry
          className='new-country'
          callback={addCountry}
        ></NewCountry>
      </header>
    </div>
  );
}

export default App;
