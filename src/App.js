import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      insult: {},
    };
  }

  async roastMe() {
    const response = await axios.get(
      "https://corsanywhere.herokuapp.com/evilinsult.com/generate_insult.php?lang=en&type=json"
    );
    this.setState({ insult: response.data });
  }

  async componentDidMount() {
    await this.roastMe();
    console.log("Yikes");
  }

  render() {
    const { insult } = this.state.insult;
    return (
      <div className="App">
        <h3>{insult}</h3>
      </div>
    );
  }
}

export default App;
