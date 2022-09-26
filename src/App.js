import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import React from 'react';


const App = () => {
  const [searchField, setSearchField] = useState(''); //const arr = [1,2], const [a, b] = arr
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  console.log('rendered'); // infinite render

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')  // fetch re-fetching over and over and over thats why infinite re-render is happening, we can use side effects
    .then((response) => response.json())   
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
    console.log('effect is firing');
  }, [monsters, searchField]);

  //side effect can be generated from functional components using the useEffect

  const onSearchChange =  (event) => {
    console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};


// export class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//      monsters: [],
//      searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//       this.setState(
//         () => {
//           return  { monsters: users };;
//         }
      
//       ))
//   }
//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return {searchField};
//     });
//   }

//   render() {
//       console.log("render from APPJS");

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });
     
//       return (
//         <div className="App">
//           <h1 className='app-title'>Monsters Rolodex</h1>

//           <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
//           <CardList monsters={filterMonsters}></CardList>
//         </div>
//       );
//     }
//   }


export default App;
