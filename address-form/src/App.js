import React, { Component } from "react";
import AddressForm from "./components/addressForm/AddressFormContainer";
import axios from "axios";
import UpdateAddressForm from "./components/addressForm/AddressFormActionCreator";
import "./App.css";
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import store from "./store/store";

class App extends Component {
  submit = values => {
    console.log("App submitting", values);
    return values;
  };

  defaultCountry = 'United States'

  formOnChange = values => {
    console.log('ON Change', values.country);
    return values.country || 'United States';
  }

  formatCountryData(data) {
    const formattedCountryData = {};
    for (let key of data) {
      if (!formattedCountryData[key.name]) {
        formattedCountryData[key.name] = key;
      }
    }
    console.log('FORMATTED COUNTRY DATA', formattedCountryData);
    return formattedCountryData;
  }

  state = {
    countries:[]
  };

  componentDidMount() {
    const getData =  async() => {
      await axios({
        method: "get",
        url: "./json/countriesStates.json"
      })
        .then(response => {
          store.dispatch(UpdateAddressForm(response.data));
          this.setState({
            countries: store.getState().AddressFormReducer.addressFormData
          });
        })
        .catch(err => {
          console.warn("There was an error fetcing the states", err);
        });
    };
    getData();
  }

  render() {
    const countries = this.state.countries;
    const formattedCountries = this.formatCountryData(countries);
    return (
      <div className="App">
        {this.state.countries.length > 0 &&
        <AddressForm 
          onSubmit={this.submit} 
          dropdownData={formattedCountries} 
          onChange={this.formOnChange} 
          defaultCountry={this.defaultCountry}
          />
        }
      </div>
    );
  }
}

export default App;
