import React, { Component } from "react";
import AddressForm from "./components/addressForm/AddressFormContainer";
import axios from "axios";
import UpdateAddressForm from "./components/addressForm/AddressFormActionCreator";
import "./App.css";
import store from "./store/store";

class App extends Component {
  submit = values => {
    console.log("App submitting", values);
  };

  state = {
    countries: {}
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "./json/countriesStates.json"
    })
      .then(response => {
        console.log("The Data", response);
        store.dispatch(UpdateAddressForm(response.data));
        console.log(store.getState());
        this.setState({
          countries: store.getState().AddressFormReducer.addressFormData
        });
      })
      .catch(err => {
        console.warn("There was an error fetcing the states", err);
      });
  }
  render() {
    console.log("THIS STATE", this.state);
    return (
      <div className="App">
        <AddressForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
