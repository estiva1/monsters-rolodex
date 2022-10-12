import { useEffect, useState } from "react";

import "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [kitties, setKitties] = useState([]);
  const [filteredKitties, setFilteredKitties] = useState(kitties);

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setKitties(users));
  }, []);

  useEffect(() => {
    const newFilteredKitties = kitties.filter((kitty) => {
      return kitty.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredKitties(newFilteredKitties);
  }, [kitties, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Kitties Party</h1>

      <SearchBox
        className="kitties-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search kitties..."
      />
      <CardList kitties={filteredKitties} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       kitties: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { kitties, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredKitties = kitties.filter((kitty) => {
//       return kitty.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Kitties Party</h1>
//         <SearchBox
//           className="kitties-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search kitties..."
//         />
//         <CardList kitties={filteredKitties} />
//       </div>
//     );
//   }
// }

export default App;
