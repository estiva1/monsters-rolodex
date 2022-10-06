import { Component } from "react";

import "./components/card-list/card-list.component";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      kitties: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { kitties: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { kitties, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredKitties = kitties.filter((kitty) => {
      return kitty.name.toLocaleLowerCase().includes(searchField);
    });
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
  }
}

export default App;
